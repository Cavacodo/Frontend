<script setup lang="ts">

</script>

<template>
  <div class="main school_tab_wrap">
    <div class="school-content school_content_1_4 clearfix">
      <div class=" school_content_left_1_4">
        <div>
          <div class="schoolLine clearfix" id="proline">
            <div class="content-top content_top_1_4 clearfix"><span class="lin-active-box"></span><span
                class="contentTop-title">各省分数线</span>
              <div class="scoreLine-dropDown">
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="562f5be8-fdc8-4f22-f4eb-c434141728c7" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title="陕西"
                             style="display: block; opacity: 1;">陕西
                        </div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-box">
                  <form id="form3" class="ant-form ant-form-horizontal">
                    <div class="ant-row ant-form-item">
                      <div class="ant-form-item-control-wrapper">
                        <div class="ant-form-item-control"><span class="ant-form-item-children"><div
                            class="ant-select-lg ant-select ant-select-enabled"
                            style="margin-left: 10px; width: 80px; font-size: 14px;"><div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                                                          aria-controls="9883d696-023c-4ba0-b2bb-f2644c89a4bc"
                                                                                          aria-expanded="false"
                                                                                          tabindex="0"><div
                            class="ant-select-selection__rendered"><div class="ant-select-selection-selected-value"
                                                                        title=""
                                                                        style="display: block; opacity: 1;"></div></div><span
                            class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                            aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                            viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="1e1dc0b3-6fc7-4f30-dafc-341410c5a5aa" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title=""
                             style="display: block; opacity: 1;"></div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="province_score_line_table">
              <div class="line_table_box">
                <table>
                  <tbody>
                  <tr>
                    <th>年份</th>
                    <th>录取批次</th>
                    <th>招生类型</th>
                    <th class="minScore">最低分/最低位次</th>
                    <th>录取率</th>
                    <th>省控线</th>
                    <th style="display: none;">专业组</th>
                    <th style="display: none;">选科要求</th>
                    <th style="display: none;">选测等级</th>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style="display: none;">-</td>
                    <td style="display: none;">-</td>
                    <td style="display: none;">-</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_tip"></div>
              <div class="clearfix">
                <div class="table_pagination_box" style="display: none;">
                  <div class="pagination_wrap clearfix"><p class="first_page page_item">首页</p>
                    <div class="pagination_box"></div>
                    <p class="end_page page_item">尾页</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="school-arrive-wrap schoolLine clearfix">
            <div class="content-top content_top_1_4 float_l" style="width: auto; margin: 0px;"><span
                class="lin-active-box"></span><span class="contentTop-title">院校直达</span></div>
            <div class="enter-button public_tbl float_r">
              <div class="operate_btn clearfix" style="position: static; transform: initial;">
                <div class="border_box float_l"><a
                    href="https://answer.eol.cn/polymerschool?source=gkcx_pc&amp;province=61&amp;key=moreschool"
                    target="_blank" class="zx_zb">问招办</a></div>
                <div class="border_box float_l zhibo" style="width: 74px; margin-left: 10px;"><img alt=""
                                                                                                   src="https://static-gkcx.gaokao.cn//upload/live/gkcx_1654244454_8808_thumb.gif"
                                                                                                   style="width: 16px; height: 16px; margin-right: 2px; position: relative; top: -1px; vertical-align: middle;">看直播
                </div>
                <div class="float_l join-volteer" style="display: flex;"><i class="iconfont icon_Test"></i>测录取</div>
              </div>
            </div>
          </div>
          <div class="schoolLine clearfix" id="scoreline">
            <div class="content-top content_top_1_4 clearfix"><span class="lin-active-box"></span><span
                class="contentTop-title">专业分数线</span>
              <div class="scoreLine-dropDown">
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="799636b7-42a4-406b-cc08-7522abf27125" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title="陕西"
                             style="display: block; opacity: 1;">陕西
                        </div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-box">
                  <form id="form3" class="ant-form ant-form-horizontal">
                    <div class="ant-row ant-form-item">
                      <div class="ant-form-item-control-wrapper">
                        <div class="ant-form-item-control"><span class="ant-form-item-children"><div
                            class="ant-select-lg ant-select ant-select-enabled"
                            style="margin-left: 10px; width: 80px; font-size: 14px;"><div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                                                          aria-controls="42999dea-6d1d-4c11-86c1-f9de5c477ab5"
                                                                                          aria-expanded="false"
                                                                                          tabindex="0"><div
                            class="ant-select-selection__rendered"><div class="ant-select-selection-selected-value"
                                                                        title=""
                                                                        style="display: block; opacity: 1;"></div></div><span
                            class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                            aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                            viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="41875093-0b38-4084-d0a7-7e82de5c16d7" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title=""
                             style="display: block; opacity: 1;"></div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-box">
                  <form id="form4" class="ant-form ant-form-horizontal">
                    <div class="ant-row ant-form-item">
                      <div class="ant-form-item-control-wrapper">
                        <div class="ant-form-item-control"><span class="ant-form-item-children"><div
                            class="ant-select-lg ant-select ant-select-enabled"
                            style="margin-left: 10px; width: 120px; font-size: 14px;"><div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                                                           aria-controls="7561d2cc-4099-4d24-84bd-7775a94c01c2"
                                                                                           aria-expanded="false"
                                                                                           tabindex="0"><div
                            class="ant-select-selection__rendered"><div class="ant-select-selection-selected-value"
                                                                        title=""
                                                                        style="display: block; opacity: 1;"></div></div><span
                            class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                            aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                            viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="province_score_line_table">
              <div class="line_table_box major_score_table ">
                <table>
                  <tbody>
                  <tr>
                    <th>专业名称</th>
                    <th>录取批次</th>
                    <th>平均分</th>
                    <th class="minScore">最低分/最低位次</th>
                    <th>录取率</th>
                    <th style="display: none;">选科要求</th>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style="display: none;">-</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_tip"></div>
              <div class="table_pagination_box" style="display: none;">
                <div class="pagination_wrap clearfix"><p class="first_page page_item">首页</p>
                  <div class="pagination_box"></div>
                  <p class="end_page page_item">尾页</p></div>
              </div>
            </div>
          </div>
          <div class="schoolLine clearfix" id="zs_plan">
            <div class="content-top content_top_1_4 clearfix"><span class="lin-active-box"></span><span
                class="contentTop-title">招生计划</span>
              <div class="scoreLine-dropDown">
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="ccae861d-7bd9-4f97-bc66-0e712f8d984d" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title="陕西"
                             style="display: block; opacity: 1;">陕西
                        </div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-box">
                  <form id="form0" class="ant-form ant-form-horizontal">
                    <div class="ant-row ant-form-item">
                      <div class="ant-form-item-control-wrapper">
                        <div class="ant-form-item-control"><span class="ant-form-item-children"><div id="select0"
                                                                                                     class="ant-select-lg ant-select ant-select-enabled"
                                                                                                     style="margin-left: 10px; width: 80px; font-size: 14px;"><div
                            class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                            aria-controls="2648a04a-304d-49ef-ad15-a496916bfd31" aria-expanded="false" tabindex="0"><div
                            class="ant-select-selection__rendered"><div class="ant-select-selection-selected-value"
                                                                        title=""
                                                                        style="display: block; opacity: 1;"></div></div><span
                            class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                            aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                            viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="dropdown-box">
                  <div class="ant-select-lg ant-select ant-select-enabled"
                       style="margin-left: 10px; width: 100px; font-size: 14px;">
                    <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                         aria-controls="c9a945a4-57ea-4691-c9fc-9ef79bbebfa8" aria-expanded="false" tabindex="0">
                      <div class="ant-select-selection__rendered">
                        <div class="ant-select-selection-selected-value" title=""
                             style="display: block; opacity: 1;"></div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                          aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                          viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em" fill="currentColor"
                          aria-hidden="true" focusable="false"><path
                          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-box">
                  <form id="form2" class="ant-form ant-form-horizontal">
                    <div class="ant-row ant-form-item">
                      <div class="ant-form-item-control-wrapper">
                        <div class="ant-form-item-control"><span class="ant-form-item-children"><div
                            class="ant-select-lg ant-select ant-select-enabled"
                            style="margin-left: 10px; width: 120px; font-size: 14px;"><div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                                                           aria-controls="479e6883-e797-4db0-8b73-d0b2c09cb6be"
                                                                                           aria-expanded="false"
                                                                                           tabindex="0"><div
                            class="ant-select-selection__rendered"><div class="ant-select-selection-selected-value"
                                                                        title=""
                                                                        style="display: block; opacity: 1;"></div></div><span
                            class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                            aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                            viewBox="64 64 896 896" class="" data-icon="down" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="province_score_line_table">
              <div class="line_table_box recruit_table">
                <table>
                  <tbody>
                  <tr>
                    <th>专业名称</th>
                    <th>计划招生</th>
                    <th>学制</th>
                    <th>学费</th>
                    <th style="display: none;">选科要求</th>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style="display: none;">-</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_tip"></div>
              <div class="table_pagination_box" style="display: none;">
                <div class="pagination_wrap clearfix"><p class="first_page page_item">首页</p>
                  <div class="pagination_box"></div>
                  <p class="end_page page_item">尾页</p></div>
              </div>
            </div>
          </div>
          <div style="padding-left: 10px;">
            <div class="right-side-bar_enrollmentInfor__1cyUb">
              <div class="right-side-bar_titleHead__2QCQa">
                <div class="right-side-bar_bigTitle__1QI1e">招生快讯</div>
                <span class="right-side-bar_more__23HTy">更多&gt;</span></div>
              <div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2023年本科招生章程</span><span
                    class="right-side-bar_time__1L66u">2023-08-15</span></div>
                <div class="right-side-bar_item__OHsaf"><span class="right-side-bar_title__1OUXG">清华大学2023年艺术类专业（美术学院）本科招生简章</span><span
                    class="right-side-bar_time__1L66u">2023-06-02</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2023年强基计划招生简章</span><span
                    class="right-side-bar_time__1L66u">2023-04-21</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2023年自强计划招生简章</span><span
                    class="right-side-bar_time__1L66u">2023-04-11</span></div>
                <div class="right-side-bar_item__OHsaf"><span class="right-side-bar_title__1OUXG">清华大学2022年艺术类专业（美术学院）本科招生简章</span><span
                    class="right-side-bar_time__1L66u">2022-12-16</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2022年本科招生章程</span><span
                    class="right-side-bar_time__1L66u">2022-05-30</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2022年自强计划招生简章</span><span
                    class="right-side-bar_time__1L66u">2022-04-15</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2022年强基计划招生简章</span><span
                    class="right-side-bar_time__1L66u">2022-04-06</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2022年外语类保送生招生简章</span><span
                    class="right-side-bar_time__1L66u">2022-02-07</span></div>
                <div class="right-side-bar_item__OHsaf"><span
                    class="right-side-bar_title__1OUXG">清华大学2022年高水平运动队招生简章</span><span
                    class="right-side-bar_time__1L66u">2022-02-07</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro_right">
        <div class="intro_right_wrap clearfix">
          <div class="right_item right_item_provinceline">
            <div class="info_title_box clearfix info_xstitle">
              <div class="info_title_left"><p class="title_border"></p><span>分数相近院校推荐</span></div>
            </div>
            <div class="school_xs_lb"></div>
            <div class="item_content_box grade_rate_box" style="box-shadow: none;">
              <div class="no_data_text"><img class="no_data_icon02" src="/static/media/no_icon02.eb0179c1.svg"
                                             width="114" height="30" alt=""></div>
            </div>
          </div>
          <div
              style="width: 100%; border-radius: 12px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 16px 0px;">
            <iframe title="gaokao" src="https://mnzy.gaokao.cn/fill-instrument?areaName=陕西" width="100%" height="174"
                    style="border: none; display: block;"></iframe>
          </div>
          <div style="width: 10px; height: 20px; display: block;"></div>
          <div class="ad_box2">
            <div class="ant-carousel">
              <div class="slick-slider intro_right_ad slick-initialized">
                <div class="slick-list">
                  <div class="slick-track" style="width: 420px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                         style="outline: none; width: 420px;">
                      <div>
                        <div class="cursor" tabindex="-1" style="width: 100%; display: inline-block;"><a
                            href="https://gaokao.eol.cn/e_html/gk/2022/2023jpjst/index.html" target="_blank"><img
                            src="https://img6.eol.cn/e_images/gk/2023/ddpyy.jpg" style="width: 100%;"></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right_item">
            <div class="info_title_box clearfix">
              <div class="info_title_left"><p class="title_border"></p><span>高考资讯</span></div>
              <p class="info_title_right"><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/" target="_blank">更多&gt;</a>
              </p></div>
            <div class="item_content_box college_rate_box">
              <ul>
                <li><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/202401/t20240102_2552648.shtml?proId=61"
                       target="_blank">西安交通大学2024年外语类保送生招生程序</a></li>
                <li><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/202401/t20240102_2552646.shtml?proId=61"
                       target="_blank">西安交通大学2024年外语类保送生招生专业与计划</a></li>
                <li><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/202401/t20240102_2552621.shtml?proId=61"
                       target="_blank">西安交通大学2024年外语类保送生招生简章</a></li>
                <li><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/202312/t20231227_2551723.shtml?proId=61"
                       target="_blank">西安体育学院2024年运动训练、武术与民族传统体育专业招生办法</a></li>
                <li><a href="https://gaokao.eol.cn/shan_xi_sheng/dongtai/202312/t20231227_2551656.shtml?proId=61"
                       target="_blank">西安体育学院2024年运动训练、武术与民族传统体育专业招生简章</a></li>
              </ul>
            </div>
          </div>
          <div class="dialog_package" id="dialog_package"></div>
        </div>
      </div>
    </div>
    <div class="ad clearfix" style="display: none;">
      <div class="ad1-box">
        <div class="ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="opacity: 1;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ad2-box">
        <div class="ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="opacity: 1;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/schoolDetailScore1.css"></style>
<style src="../assets/css/schoolDetailScore2.css"></style>
<style src="../assets/css/schoolDetailScore3.css"></style>
