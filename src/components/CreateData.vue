<template>
  <div>
    <div id="input" style="width: 40%;height: 500px;position: absolute;left: 0px;top: 50px">
      <div style="position: absolute;top: 0px;left: 0px;width: 40%">
        <div style="color: dodgerblue;font-size: 25px">节点号</div>
        <div style="color: #aaaaaa">*每行一个节点</div>
        <div style="width: 100%;height: 400px;overflow-y: scroll">
          <el-input
            type="textarea"
            :rows="10000"
            @change="changeChart"
            placeholder="请输入内容"
            v-model="nodestr">
          </el-input>
        </div>
      </div>
      <div style="position: absolute;top: 0px;left: 50%;width: 40%">
        <div style="color: dodgerblue;font-size: 25px">连接边</div>
        <div style="color: #aaaaaa">*每行两个节点</div>
        <div style="width: 100%;height: 400px;overflow-y: scroll">
          <el-input
            type="textarea"
            :rows="10000"
            @change="changeChart"
            placeholder="请输入内容"
            v-model="edgestr">
          </el-input>
        </div>
      </div>
    </div>
    <div id="chart" style="width:40%;height:500px;position: absolute;left: 50%;top: 50px"></div>
  </div>
</template>

<script>

import * as echarts from 'echarts'

export default {
  name: 'CreateData',
  data () {
    return {
      nodestr: '',
      edgestr: ''
    }
  },
  methods: {
    changeChart () {
      let nodestr = this.nodestr
      let data = []
      nodestr.split('\n').forEach(res => {
        data.push({name: res})
      })
      let edgestr = this.edgestr
      let links = []
    },
    draw () {
      var myChart = echarts.init(document.getElementById('chart'))
      var categories = []
      var option
      option = {
        // 图的标题
        title: {
          text: 'DNA数据图'
        },
        // 提示框的配置
        tooltip: {
          formatter: function (x) {
            return x.data.des
          }
        },
        // 工具箱
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            mark: {
              show: true
            },
            // 还原
            restore: {
              show: true
            },
            // 保存为图片
            saveAsImage: {
              show: true
            }
          }
        },
        series: [{
          type: 'graph', // 类型:关系图
          layout: 'force', // 图的布局，类型为力导图
          symbolSize: 40, // 调整节点的大小
          roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [2, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              },
              show: true,
              formatter: function (x) {
                return x.data.name
              }
            }
          },
          force: {
            repulsion: 2500,
            edgeLength: [10, 50]
          },
          draggable: true,
          lineStyle: {
            normal: {
              width: 2,
              color: '#4b565b'
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {}
            }
          },

          // 数据
          data: [{
            name: 'node01'
          }, {
            name: 'node02'
          }, {
            name: 'node03'
          }, {
            name: 'node04'
          }, {
            name: 'node05'
          }],
          links: [{
            source: 'node01',
            target: 'node02',
            name: ''
          }, {
            source: 'node01',
            target: 'node03',
            name: ''
          }, {
            source: 'node01',
            target: 'node04',
            name: ''
          }, {
            source: 'node01',
            target: 'node05',
            name: ''
          }],
          categories: categories
        }]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.draw()
  },
  created () {
  }
}
</script>

<style scoped>

</style>
