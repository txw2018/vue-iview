<!-- 组件 -->
<template>
  <div>
    <Row>
        <Col span="12">
            <TimePicker format="HH:mma" placeholder="Select time" style="width: 112px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker format="HH:mma" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>

  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {

  },

  computed: {},

  mounted () {},

  methods: {}
};
</script>
<style lang='stylus' scoped>
</style>
