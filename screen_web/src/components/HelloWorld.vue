<template>
  <div id="box" style="width: 600px;height:400px;"></div>
</template>

<script>
// import Echarts from Echarts
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.drow()
  },
  methods: {
    drow() {
      var myChart = this.$echarts.init(document.getElementById('box'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: [ " 衬衫 ", "羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
