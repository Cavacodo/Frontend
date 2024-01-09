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
  <div class="main-nav_mainNavWrap__o2m5H" style="display: block;">
    <div class="main-nav_loginSearchArea__26KuI">
      <div class="main-nav_left__3UKkT">
        <div class="main-nav_logoBox__1fEO4"><img class="main-nav_logo1__3O3JM" alt=""
                                                  src="/static/media/head_logo1.133254dc.png"><span
            class="main-nav_line__3gyOo"></span><img class="main-nav_logo2__bmYaw" alt=""
                                                     src="data:image/jpeg;base64,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">
        </div>
        <div class="main-nav_searchBox__2r4u4">
          <div class="head_searchIpt_wrap clearfix float_l">
            <div class="search_box"><input id="headsearch" class="search_ipt head_h_search"
                                           placeholder="查大学、查专业、搜问答" maxlength="100" autocomplete="off"
                                           value="">
              <button class="search_icon">搜索</button>
            </div>
          </div>
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
          <div class="main-nav_title__3Mns6" @click="changeRouter(4)">院校分析</div>
        </div>
        <div :class="cssRouteForm[5]">
          <div class="main-nav_title__3Mns6" @click="changeRouter(5)">智能推荐</div>
        </div>
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
