<template>
  <div id="app">
    <div id="nav">
       <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderGroup from './components/HeaderGroup'
export default {
  data(){
    return{

    }

  },
  components:{
    HeaderGroup
  }
  
}
</script>

<style lang="stylus">

</style>
