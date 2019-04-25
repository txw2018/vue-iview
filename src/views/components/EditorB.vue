<!-- A -->
<template>
  <div>
    <editor-bar :content="content" :catchData="catchData"></editor-bar>

     <button @click="getContent">点击</button>
  </div>
</template>

<script>
import EditorBar from '../../components/editor';
export default {
  data () {
    return {
      content: '32321321321321'
    };
  },

  components: {
    EditorBar
  },

  computed: {},

  mounted () {},

  methods: {
    catchData (value) {
      this.content = value;
    },
    getContent () {
      console.log(this.content);
    }
  },

};
</script>
<style lang='stylus' scoped>
</style>
