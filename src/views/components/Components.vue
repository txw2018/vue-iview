<!-- 组件 -->
<template>
  <div>
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">
          <editor-a></editor-a>
        </TabPane>
        <TabPane label="标签二" name="name2">
          <editor-b></editor-b>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
import EditorA from './EditorA';
import EditorB from './EditorB';
export default {
  data () {
    return {
    };
  },

  components: {
    EditorA,
    EditorB
  },

  computed: {},

  mounted () {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
</style>
