<template>
    <el-container class="province">
        <el-form-item label="选择省份">
            <el-select v-model="value1" placeholder="请选择">
                <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
    </el-container>
    <el-container class="batch">
        <el-form-item label="选择批次">
            <el-select v-model="value3" placeholder="请选择">
                <el-option v-for="item in batch" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
    </el-container>
    <el-container class="year">
        <el-form-item label="选择年份">
            <el-select v-model="value2" placeholder="请选择">
                <el-option v-for="item in year" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
    </el-container>
    <el-container class="button">
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-container>
    <div class="pic">
        <img id='pics' src="https://p3.itc.cn/q_70/images03/20231228/3f754204387a4c59b39e9b1f11396a96.png">
    </div>
</template>
<style>
.province {
    position: relative;
    left: 40%;
    margin-top: 5%;
}

.year {
    position: relative;
    left: 40%;
    margin-top: 1%;
}

.batch {
    position: relative;
    left: 40%;
    margin-top: 1%;
}

.button {
    position: relative;
    left: 50%;
    margin-top: 1%;
}

.pic {
    width: 400px;
    height: 300px;
    margin-left: 5%;
}
</style>
<script>

export default {
    data() {
        return {
            year: [{
                value: '1',
                label: '2023'
            },
            {
                value: '2',
                label: '2022'
            },
            {
                value: '3',
                label: '2021'
            },
            {
                value: '4',
                label: '2020'
            }
            ],
            batch: [{
                value: '1',
                label: '提前批'
            },
            {
                value: '2',
                label: '本科批'
            },
            {
                value: '3',
                label: '专科批'
            }
            ],
            // value: '',
            province: [{
                value: '选项1',
                label: '河北'
            }, {
                value: '选项2',
                label: '山西'
            }, {
                value: '选项3',
                label: '辽宁'
            }, {
                value: '选项4',
                label: '吉林'
            }, {
                value: '选项5',
                label: '黑龙江'
            }, {
                value: '6',
                label: '江苏'
            }, {
                value: '7',
                label: '浙江'
            }, {
                value: '8',
                label: '安徽'
            }, {
                value: '9',
                label: '福建'
            }, {
                value: '10',
                label: '江西',
            }, {
                value: '11',
                label: '山东'
            }, {
                value: '12',
                label: '河南'
            }, {
                value: '13',
                label: '湖北'
            }, {
                value: '14',
                label: '湖南'
            }, {
                value: '15',
                label: '广东'
            }, {
                value: '16',
                label: '海南'
            }, {
                value: '17',
                label: '四川'
            }, {
                value: '18',
                label: '贵州'
            }, {
                value: '19',
                label: '云南'
            }, {
                value: '20',
                label: '陕西'
            }, {
                value: '21',
                label: '甘肃'
            }, {
                value: '22',
                label: '青海'
            }, {
                value: '24',
                label: '内蒙古'
            }, {
                value: '25',
                label: '广西'
            }, {
                value: '26',
                label: '西藏'
            }, {
                value: '27',
                label: '宁夏'
            }, {
                value: '28',
                label: '新疆'
            }, {
                value: '28',
                label: '北京'
            }, {
                value: '29',
                label: '天津'
            }, {
                value: '30',
                label: '上海'
            }, {
                value: '31',
                label: '重庆'
            }
            ],
            value1: [],
            value2: [],
            value3: []
        }
    },
    mounted() {
        
    },
    methods: {
        submitForm(){
            const picURL = 'https://cimg.cnyes.cool/prod/news/4246948/xl/e1268acfc33ad4e776ca70c22ecb5213.jpg';
            const picElement = document.getElementById('pics');
            picElement.src = picURL;
        }
    }
}

</script>