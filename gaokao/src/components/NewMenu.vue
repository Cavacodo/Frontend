<script>
import {reactive, ref, watch, onMounted} from "vue";
import {useRouter, useRoute} from "vue-router";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const onRoute = ref(1)
    const cssRouteForm = reactive([
      "main-nav_navItem__3w2xP main-nav_active__2I_L3",
      "main-nav_navItem__3w2xP",
      "main-nav_navItem__3w2xP",
      "main-nav_navItem__3w2xP",
      "main-nav_navItem__3w2xP",
      "main-nav_navItem__3w2xP",
      "main-nav_navItem__3w2xP",
    ])
    const cssNameEnum = reactive([
        "/home",
        "/school",
        "/scoreSearch",
        "/scorePrediction",
        "/analyse",
        "/recommend",
        "/bigdata"
    ])
    watch(() => route.path, (newPath, oldPath) => {
      console.log(newPath)
      cssNameEnum.forEach((item, index) => {
        if (item == route.path) {
          cssRouteForm[index] = "main-nav_navItem__3w2xP main-nav_active__2I_L3"
        } else {
          cssRouteForm[index] = "main-nav_navItem__3w2xP"
        }
      })
    }, {immediate: true});

    function changeRouter(routeTo) {

      switch (routeTo) {

        case 0: {
          router.push("/home")
          break;
        }
        case 1: {
          router.push("/school")
          break;
        }
        case 2: {
          router.push("/scoreSearch")
          break;
        }
        case 3: {
          router.push("/scorePrediction")
          break;
        }
        case 4: {
          router.push("/analyse")
          break;
        }
        case 5: {
          router.push("/recommend")
          break;
        }
        case 6: {
          router.push("/bigdata")
          break;
        }
        case 7: {
          router.push("/myProfile")
          break;
        }
        case 8: {
          router.push("/login")
          break;
        }
      }
    }

    function showDialog() {

    }

    return {
      onRoute,
      cssRouteForm,
      changeRouter,
      showDialog
    }
  }
}


</script>

<template>
  <div class="main-nav_mainNavWrap__o2m5H" style="display: block;margin-top: 55px">
    <div class="main-nav_loginSearchArea__26KuI">
      <div class="main-nav_left__3UKkT">
        <div class="main-nav_logoBox__1fEO4">
          <img class="main-nav_logo2__bmYaw" alt="" src="../assets/img/HomeLogo.png" style="width: 300px">
          <img class="main-nav_logo2__bmYaw" alt="" src="../assets/img/横幅.gif" style="height: 80px;width: 350px;margin-left: 50px">
        </div>
      </div>
    </div>
    <div class="dialog_package" id="dialog_package">
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
      <div>
        <div>
          <div class="ant-modal-mask ant-modal-mask-hidden"></div>
          <div tabindex="-1" class="ant-modal-wrap ant-modal-centered cus-modal-wrapper" role="dialog"
               style="display: none;"></div>
        </div>
      </div>
    </div>
    <div class="dialog_package" id="dialog_package"></div>
    <div class="dialog_package" id="dialog_package"></div>
    <div class="head-nav-fix_headNavWrap__3_bEF">
      <div class="head-nav-fix_centerBox__3QaZG">
        <div class="head-nav-fix_searchAndNav__4PRDW">
          <div class="head-nav-fix_searchBox__H3zQU"><input type="text" placeholder="查大学，查专业，查资讯" value="">
            <button>搜索</button>
          </div>
          <div class="head-nav-fix_navList__1nUqb">
            <div class="head-nav-fix_item__33efz">模拟报志愿<img src="/static/media/AI.85091cfc.gif" alt=""
                                                                 class="head-nav-fix_hotIcon__3jwMZ"></div>
            <div class="head-nav-fix_item__33efz">查学校</div>
            <div class="head-nav-fix_item__33efz">查专业</div>
            <div class="head-nav-fix_item__33efz">专家讲志愿</div>
            <div class="head-nav-fix_item__33efz">高考工具箱</div>
          </div>
        </div>
        <div class="head-nav-fix_userInfoBox__3aAbQ">
          <div class="head-nav-fix_changeCity__dDVbd"><span>西安市</span><em>[切换]</em></div>
          <div style="width: 8px; height: 10px; display: inline-block;"></div>
          <div class="login-btn-float_loginBtnBox__YXCSd"><span
              class="login-btn-float_loginText__9o_uo">登录/注册</span></div>
        </div>
      </div>
    </div>
    <div class="main-nav_mainNav__1qgwf">
      <div class="main-nav_navBox__MY9It">
        <div :class="cssRouteForm[0]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(0)">主页</div>
        </div>
        <div :class="cssRouteForm[1]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(1)">高校查询</div>
        </div>
        <div :class="cssRouteForm[2]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(2)">分数查询</div>
        </div>
        <div :class="cssRouteForm[3]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(3)">分数预测</div>
        </div>
        <div :class="cssRouteForm[4]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(4)">院校统计</div>
        </div>
<!--        <div :class="cssRouteForm[5]">-->
<!--          <div class="main-nav_title__3Mns6" @click="changeRouter(5)">智能推荐</div>-->
<!--        </div>-->
        <div :class="cssRouteForm[6]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(6)">数据大屏</div>
        </div>
      </div>
    </div>
    <div class="dialog_package" id="dialog_package"></div>
    <div class="dialog_package" id="dialog_package"></div>
  </div>
</template>

<style scoped>

</style>
<style src="../assets/css/menu1.css"></style>
