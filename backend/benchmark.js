import axios from 'axios';
import { performance } from 'perf_hooks';

const TEST_COUNT = 20;
const API_URL = 'http://localhost:4000/api?topic=sport';

const runBenchmark = async (label) => {
  console.log(`\n🔬 Benchmark: ${label}`);
  let total = 0;

  for (let i = 0; i < TEST_COUNT; i++) {
    const start = performance.now();

    try {
      const res = await axios.get(API_URL);
      const time = performance.now() - start;
      total += time;
      console.log(`#${i + 1} - ${res.data?.items?.length || 0} items in ${time.toFixed(2)} ms`);
    } catch (err) {
      console.log(`#${i + 1} - ❌ Failed:`, err.message);
    }
  }

  console.log(`\n📊 Average Time (${label}): ${(total / TEST_COUNT).toFixed(2)} ms`);
};

// Run benchmarks with 2-second pause in between
(async () => {
  console.log("⚡️ Benchmark Starting...");

  console.log('\n🚫 Redis NOT primed (first hit = API)');
  await runBenchmark('Cold cache (no Redis)');

  console.log('\n⏳ Waiting for cache TTL to expire...');
  await new Promise((res) => setTimeout(res, 22000)); // 22 sec = wait for Redis TTL to expire

  console.log('\n🚀 Redis primed (expect cache hits)');
  await runBenchmark('Warm cache (with Redis)');
})();
