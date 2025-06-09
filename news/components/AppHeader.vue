<template>
  <div class="flex flex-col mx-30 h-20 bg-slate-200 content-center justify-center z-10" >
    <div class="bg-white relative flex flex-row h-[100%] justify-center " style="box-shadow: 0px -4px 1px slategrey inset;" >
      <p class="absolute left-0 top-1/2 -translate-y-1/2"> {{ today }}</p>
      <div class="absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl">THE NEWS</div>
    </div>
    <div>
       <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

const today = dayjs().format('D MMMM YYYY')  // Example: "9 June 2025"
</script>
