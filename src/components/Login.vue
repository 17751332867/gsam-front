<template>
  <div class="main">
    <div class="left">
      <div class="banner">
        <img src="../assets/logo.jpg"
             style="height: 20px;width: 20px;margin-left: 20px;margin-top: 10px;border-radius: 20px;line-height: 40px">
        <div style="color: white;height: 40px;line-height: 100%;display: inline; font-size: 20px">范基因组组装平台</div>
      </div>
      <div class="title">
        <div style="font-size: 40px">GSAM</div>
        <div style="font-size: 20px">广义后缀自动机</div>
      </div>
      <div class="list">
        <ul>
          <li>范基因组快速匹配</li>
          <li>DNA快速查询</li>
          <li>范基因图可视化</li>
        </ul>
      </div>
      <div class="copyright">
        <div>版权所有@兰州理工大学软件工程专业王宇龙</div>
      </div>
    </div>
    <div class="right">
      <div class="login">
        <el-card>
          <div slot="header" class="clearfix">
            <span>登录</span>
          </div>
          <div>
            <el-form :model="user" :label-position="labelPosition" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="user.password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-row>
                  <el-col :span="3">
                    <el-checkbox v-model="remembered">记住我</el-checkbox>
                  </el-col>
                  <el-col :offset="15" :span="6">
                    <el-link>忘记密码</el-link>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-button size="medium" style="width: 100%" type="primary" @click="handleLogin">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../api'
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data () {
    return {
      remembered: 'false',
      labelPosition: 'right',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      if (this.remembered === true) {
        Cookies.set('remembered', JSON.stringify(this.user))
      } else {
        Cookies.remove('remembered')
      }
      login(this.user).then(res => {
        if (res.data.msg === 'error') {
          this.$notify({type: 'error', message: '或者密码错误'})
        } else {
          this.$notify({type: 'success', message: '登陆成功'})
          Cookies.set('user', JSON.stringify(res.data))
          this.$router.push('/home/index')
        }
      })
    }
  },
  created () {
    let remembered = Cookies.get('remembered')
    if (remembered !== undefined || remembered != null) {
      let temp = JSON.parse(remembered)
      this.user = temp
      this.remembered = true
    }
  }
}
</script>

<style scoped>
.clearfix {
  text-align: left;
}

.login {
  text-align: center;
  margin: 20% 30%;
  height: 40%;
  width: 40%;
  position: absolute;
}

.copyright {
  position: absolute;
  bottom: 50px;
  left: 60px;
  color: #aaaaaa;
  font-size: 10px;
}

.list {
  position: absolute;
  top: 300px;
  left: 65px;
  color: #aaaaaa;
}

.title {
  position: absolute;
  top: 150px;
  left: 50px;
  color: white;
}

.main {
  position: absolute;
  width: 100%;
  height: 100%;
}

.left {
  background: url('../assets/banner.png') no-repeat;
  width: 30%;
  height: 100%;
  background-size: 100% 100%;
  display: inline-block;
}

.right {
  position: absolute;
  left: 30%;
  display: inline-block;
  width: 70%;
  height: 100%;
}
</style>
