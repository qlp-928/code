<template>
	<div>
      <div class="box1" v-for="(item,index) in 100" :key="index" slot="skeleton">
        {{item}}1
      </div>
  </div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
  .box1{width: 500px; height: 500px; background-color: #000;margin-bottom: 10px;color: #fff;}
</style>
