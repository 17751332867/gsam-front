<template>
  <div>
    <div id="input" style="width: 40%;height: 500px;position: absolute;left: 0px;top: 50px">
      <div style="position: absolute;top: 0px;left: 0px;width: 40%;">
        <div style="color: dodgerblue;font-size: 25px">节点号</div>
        <div style="color: #aaaaaa">*每行一个节点</div>
        <div style="width: 100%;height: 380px;overflow-y: scroll;border: solid 1px #aaaaaa">
          <el-input
            type="textarea"
            :rows="10000"
            @change="changeChart"
            placeholder="请输入内容"
            v-model="nodestr">
          </el-input>
        </div>
      </div>
      <div style="position: absolute;top: 0px;left: 50%;width: 40%;">
        <div style="color: dodgerblue;font-size: 25px">连接边</div>
        <div style="color: #aaaaaa">*每行两个节点</div>
        <div style="width: 100%;height: 380px;overflow-y: scroll;border: solid 1px #aaaaaa">
          <el-input
            type="textarea"
            :rows="10000"
            @change="changeChart"
            placeholder="请输入内容"
            v-model="edgestr">
          </el-input>
        </div>
      </div>
      <div style="position: absolute;bottom: 0px;left: 0px">
        <el-row>
          <el-col :span="8" style="font-size: 25px">文件名：</el-col>
          <el-col :span="16"><el-input label="文件名" v-model="name"></el-input></el-col>
        </el-row>
      </div>
    </div>
    <div id="chart" style="width:40%;height:500px;position: absolute;left: 50%;top: 50px;border: solid 1px #aaaaaa"></div>
    <el-row style="width: 100%;height: 100px;position: absolute;top: 600px;left: 0px">
        <el-col :span="6">
          <div>read长度:<el-input-number v-model="num" :step="50"></el-input-number></div>
          <div>read个数:<el-input-number v-model="size" :step="10000"></el-input-number></div>
        </el-col>
        <el-col :span="8">
          <div>核心DNA长度下界:<el-input-number v-model="maxLengthLowerBound" :step="100"></el-input-number></div>
          <div>核心DNA长度上界:<el-input-number v-model="maxLengthUpperBound" :step="100"></el-input-number></div>
        </el-col>
        <el-col :span="8">
          <div>附属DNA长度下界:<el-input-number v-model="minLengthLowerBound" :step="100"></el-input-number></div>
          <div>附属DNA长度上界:<el-input-number v-model="minLengthUpperBound" :step="100"></el-input-number></div>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="submit" style="height: 80px">提交</el-button>
        </el-col>
    </el-row>
  </div>
</template>

<script>

import * as echarts from 'echarts'

export default {
  name: 'CreateData',
  data () {
    return {
      nodestr: '',
      edgestr: '',
      data: [],
      links: [],
      num: 100,
      size: 10000,
      maxLengthLowerBound: 3000,
      maxLengthUpperBound: 5000,
      minLengthLowerBound: 300,
      minLengthUpperBound: 500,
      name: ''
    }
  },
  methods: {
    changeChart () {
      let nodestr = this.nodestr
      this.data = []
      nodestr.split('\n').forEach(res => {
        if (res.length === 0) return
        this.data.push({name: res})
      })
      let edgestr = this.edgestr
      console.log(edgestr.length)
      this.links = []
      // if (edgestr.length !== 0 || edgestr.split('\n').length === 1) {
      //   this.$notify({message: '一行两个空格隔开', type: 'error'})
      //   return
      // }
      edgestr.split('\n').forEach(res => {
        if (res.length === 0) return
        let tt = res.split(' ')
        console.log(tt)
        let ss = []
        tt.forEach(t => {
          if (t !== '')ss.push(t)
        })
        console.log(ss)
        let source = ss[0]
        let target = ss[1]
        this.links.push({
          source: source,
          target: target,
          name: ''
        })
      })
      this.draw(this.data, this.links)
    },
    draw (chartNode, chartEdge) {
      var myChart = echarts.init(document.getElementById('chart'))
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
          data: chartNode,
          links: chartEdge
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
