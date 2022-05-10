import Mock from 'mockjs'

// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '小米',
                        value: '2999'
                    },
                    {
                        name: '苹果',
                        value: '5999'
                    },
                    {
                        name: 'vivo',
                        value: '1599'
                    },
                    {
                        name: 'oppo',
                        value: '1899'
                    },
                    {
                        name: '魅族',
                        value: '2299'
                    },
                    {
                        name: '三星',
                        value: '4299'
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 12,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 50,
                        active: 900
                    },
                    {
                        date: '周四',
                        new: 365,
                        active: 1300
                    },
                    {
                        date: '周五',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周六',
                        new: 36,
                        active: 700
                    },
                    {
                        date: '周日',
                        new: 45,
                        active: 180
                    },
                ],
                // 折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: "oppo",
                        todayBuy: 100,
                        mouthBuy: 500,
                        totalBuy: 8100,
                    },
                    {
                        name: "小米",
                        todayBuy: 600,
                        mouthBuy: 2900,
                        totalBuy: 3000,
                    },
                    {
                        name: "三星",
                        todayBuy: 900,
                        mouthBuy: 10000,
                        totalBuy: 36000,
                    },
                    {
                        name: "魅族",
                        todayBuy: 800,
                        mouthBuy: 6800,
                        totalBuy: 16000,
                    },
                    {
                        name: "苹果",
                        todayBuy: 900,
                        mouthBuy: 8960,
                        totalBuy: 68000,
                    },
                    {
                        name: "vivo",
                        todayBuy: 780,
                        mouthBuy: 3000,
                        totalBuy: 80000,
                    },
                ]
            }
        }
    }
}