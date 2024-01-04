// src/mock/index.js
import Mock from 'mockjs'  //导入mockjs

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据

Mock.mock('/getData', 'get', {
    status: 200, //请求成功状态码
    dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //模拟的请
})
Mock.mock('/isValid', 'post', function (res) {
    let body = JSON.parse(res.body)
    const isTruem = body.account === 'root' && body.passwd === 'root';
    return {
        isTrue: isTruem
    }
})
Mock.mock(RegExp('/school/getByKey' + '.*'), 'get', {
    status: 200,
    dataList: [
        {
            id: 1,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["西安交通大学", "人气高校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 2,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["北京大学", "教育名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 3,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["清华大学", "顶尖名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 4,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["复旦大学", "上海牌子"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 5,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["上海交通大学", "上海牌子"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 6,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["中山大学", "岭南名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 7,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["南京大学", "历史悠久"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 8,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["浙江大学", "强势崛起"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 9,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["华中科技大学", "光谷高校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 10,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["武汉大学", "湖北名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 11,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["中国科学技术大学", "科技强校"],
            tags: ["985", "211", "理工院校"],
            extensions: []
        }, {
            id: 12,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["南开大学", "北大清华之外"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 13,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["山东大学", "齐鲁名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 14,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["中国人民大学", "社科强校"],
            tags: ["985", "211", "社科院校"],
            extensions: []
        }, {
            id: 15,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["北京师范大学", "师范教育"],
            tags: ["985", "211", "师范院校"],
            extensions: []
        }, {
            id: 16,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["厦门大学", "海洋之光"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 17,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["东南大学", "江南名校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 18,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["哈尔滨工业大学", "东北名校"],
            tags: ["985", "211", "理工院校"],
            extensions: []
        }, {
            id: 19,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["同济大学", "上海牌子"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }, {
            id: 20,
            url: 'https://static-data.gaokao.cn/upload/logo/414.jpg',
            titles: ["华南理工大学", "光谷高校"],
            tags: ["985", "211", "综合院校"],
            extensions: []
        }
    ]
})
Mock.mock('/getRecommendTableData', 'get', {
    status: 200, //请求成功状态码
    dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //模拟的请
})
Mock.mock('/checkAnalyse','post',(dataset) => {
    let params = JSON.parse(dataset.body);
    const picURL2 = params.province =='河北' && params.batch == '提前批' && params.year == '2023' ? 'https://cimg.cnyes.cool/prod/news/4246948/xl/e1268acfc33ad4e776ca70c22ecb5213.jpg' : '';
    if(picURL2 == '') alert('null');
    return{
        status : 200,
        pic : picURL2
    }
})
