/**
 * 数据可视化演示 - 数据文件
 * 包含示例数据集用于各种图表显示
 */

// 全局数据对象
const visualData = {
    // 全球人口数据
    population: {
        // 地区人口分布
        regions: {
            labels: ['亚洲', '非洲', '欧洲', '北美洲', '南美洲', '大洋洲'],
            data: [4641, 1340, 747, 592, 430, 43],  // 单位：百万
            density: [150, 45, 73, 25, 24, 5]       // 人口密度，每平方公里
        },
        // 人口增长趋势
        growth: {
            years: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025],
            population: [2.5, 3.0, 3.7, 4.4, 5.3, 6.1, 6.9, 7.8, 8.0], // 单位：十亿
            growthRate: [1.8, 2.1, 1.9, 1.8, 1.6, 1.3, 1.2, 1.1, 1.0]  // 年增长率，%
        },
        // 人口年龄结构
        ageStructure: {
            years: [1950, 1970, 1990, 2010, 2025],
            ageGroups: ['0-14岁', '15-64岁', '65岁以上'],
            data: [
                [34.3, 60.6, 5.1],  // 1950
                [37.6, 57.4, 5.0],  // 1970
                [32.9, 61.8, 5.3],  // 1990
                [26.8, 65.6, 7.6],  // 2010
                [23.7, 64.8, 11.5]  // 2025
            ]
        }
    },

    // 经济数据
    economy: {
        // GDP增长趋势
        gdpGrowth: {
            years: [2000, 2005, 2010, 2015, 2020, 2025],
            regions: ['北美', '欧洲', '亚太', '拉美', '非洲', '中东'],
            data: [
                [4.1, 3.5, 5.3, 3.8, 3.2, 6.7],  // 2000
                [3.5, 2.3, 6.8, 4.6, 5.5, 5.9],  // 2005
                [2.6, 2.1, 7.4, 6.1, 5.4, 4.8],  // 2010
                [2.8, 2.4, 6.2, 0.3, 3.2, 2.7],  // 2015
                [-3.5, -6.3, -1.7, -7.0, -1.8, -3.2],  // 2020
                [3.8, 3.5, 5.2, 2.9, 4.1, 4.3]   // 2025
            ]
        },
        // 行业分布
        industryDistribution: {
            categories: ['农业', '工业', '服务业', '信息技术', '金融', '其他'],
            developed: [1.2, 25.0, 45.8, 12.7, 10.3, 5.0],
            developing: [12.3, 32.5, 38.7, 4.8, 5.2, 6.5]
        },
        // 贸易流动
        tradeFlow: {
            regions: ['北美', '欧洲', '亚太', '拉美', '非洲', '中东'],
            matrix: [
                [1250, 580, 720, 320, 75, 110],   // 北美出口至其他地区
                [620, 3450, 650, 210, 180, 240],  // 欧洲出口至其他地区
                [840, 730, 1980, 260, 230, 360],  // 亚太出口至其他地区
                [380, 190, 220, 280, 45, 60],     // 拉美出口至其他地区
                [85, 210, 270, 40, 120, 90],      // 非洲出口至其他地区
                [130, 260, 420, 50, 70, 190]      // 中东出口至其他地区
            ]
        },
        // 货币汇率
        currencyRates: {
            years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
            currencies: ['美元指数', '欧元/美元', '英镑/美元', '美元/日元', '美元/人民币'],
            data: [
                [90.0, 1.09, 1.51, 120.5, 6.20],  // 2015
                [95.8, 1.05, 1.35, 116.8, 6.65],  // 2016
                [92.5, 1.13, 1.29, 112.7, 6.75],  // 2017
                [96.2, 1.14, 1.28, 110.3, 6.88],  // 2018
                [97.3, 1.12, 1.27, 109.0, 6.91],  // 2019
                [102.8, 1.08, 1.23, 103.5, 7.00], // 2020
                [95.7, 1.18, 1.37, 110.2, 6.45],  // 2021
                [106.5, 1.02, 1.20, 131.9, 7.05], // 2022
                [103.0, 1.08, 1.25, 140.0, 7.10], // 2023
                [101.5, 1.09, 1.28, 145.0, 7.15], // 2024
                [100.0, 1.10, 1.30, 140.0, 7.00]  // 2025
            ]
        }
    },

    // 环境数据
    environment: {
        // 温室气体排放
        emissions: {
            years: [1990, 2000, 2010, 2020, 2025],
            categories: ['二氧化碳', '甲烷', '氧化亚氮', '氟化气体'],
            data: [
                [22.0, 8.1, 3.2, 0.5],  // 1990
                [24.8, 8.3, 3.4, 0.8],  // 2000
                [33.1, 8.5, 3.5, 1.7],  // 2010
                [36.4, 8.6, 3.7, 2.5],  // 2020
                [38.0, 8.7, 3.8, 2.9]   // 2025
            ]
        },
        // 森林覆盖率
        forestCover: {
            years: [1990, 2000, 2010, 2020, 2025],
            regions: ['北美', '南美', '欧洲', '亚洲', '非洲', '大洋洲'],
            data: [
                [32.4, 51.5, 43.8, 25.3, 30.6, 15.8],  // 1990
                [32.8, 49.6, 44.1, 24.5, 28.7, 15.4],  // 2000
                [33.1, 47.8, 44.5, 23.8, 26.8, 15.0],  // 2010
                [33.5, 46.3, 45.0, 23.4, 25.3, 14.7],  // 2020
                [33.7, 45.5, 45.2, 23.0, 24.5, 14.5]   // 2025
            ]
        },
        // 全球气温变化
        temperatureChange: {
            years: [1900, 1920, 1940, 1960, 1980, 2000, 2020, 2025],
            baseline: 0, // 基准值（1850-1900年平均值）
            scenarios: {
                optimistic: [0.0, 0.1, 0.2, 0.3, 0.4, 0.7, 1.1, 1.2],   // 乐观情景
                balanced: [0.0, 0.1, 0.2, 0.3, 0.4, 0.7, 1.1, 1.5],     // 平衡情景
                pessimistic: [0.0, 0.1, 0.2, 0.3, 0.4, 0.7, 1.1, 1.8]   // 悲观情景
            }
        },
        // 可再生能源采用率
        renewableEnergy: {
            years: [2000, 2005, 2010, 2015, 2020, 2025],
            categories: ['水电', '风能', '太阳能', '生物质能', '地热', '其他'],
            data: [
                [18.5, 0.5, 0.1, 1.8, 0.5, 0.2],  // 2000
                [19.0, 1.0, 0.3, 2.0, 0.6, 0.2],  // 2005
                [19.5, 2.0, 0.8, 2.2, 0.7, 0.3],  // 2010
                [20.0, 4.5, 2.5, 2.5, 0.8, 0.4],  // 2015
                [21.0, 7.0, 5.0, 2.8, 0.9, 0.5],  // 2020
                [22.0, 10.0, 9.0, 3.0, 1.0, 0.6]  // 2025
            ]
        }
    },

    // 社会数据
    social: {
        // 教育水平分布
        education: {
            years: [1980, 1990, 2000, 2010, 2020, 2025],
            categories: ['初等教育', '中等教育', '高等教育', '未受教育'],
            data: [
                [45.8, 25.2, 10.5, 18.5],  // 1980
                [49.3, 28.7, 12.8, 9.2],   // 1990
                [52.5, 31.5, 15.7, 7.3],   // 2000
                [56.8, 33.6, 19.8, 5.8],   // 2010
                [59.3, 35.4, 23.5, 4.0],   // 2020
                [61.0, 36.5, 25.8, 3.0]    // 2025
            ]
        },
        // 健康指标
        health: {
            years: [1980, 1990, 2000, 2010, 2020, 2025],
            indicators: {
                lifeExpectancy: [62.8, 65.4, 67.8, 70.5, 72.6, 73.5],  // 预期寿命
                infantMortality: [80, 65, 54, 37, 28, 24],             // 婴儿死亡率（每千名活产）
                healthcareAccess: [45, 52, 60, 68, 74, 78]             // 医疗服务可及性（%）
            }
        },
        // 城市化进程
        urbanization: {
            years: [1950, 1970, 1990, 2010, 2025],
            regions: ['全球', '发达国家', '发展中国家'],
            data: [
                [29.6, 54.8, 17.7],  // 1950
                [36.6, 66.7, 25.3],  // 1970
                [43.0, 73.9, 34.8],  // 1990
                [51.6, 77.5, 46.0],  // 2010
                [59.5, 81.2, 56.3]   // 2025
            ]
        }
    },

    // 科技趋势数据
    technology: {
        // 研发投入
        rdInvestment: {
            years: [2000, 2005, 2010, 2015, 2020, 2025],
            regions: ['北美', '欧洲', '亚洲', '其他'],
            data: [
                [2.6, 1.9, 2.3, 0.7],  // 2000
                [2.7, 2.0, 2.6, 0.8],  // 2005
                [2.8, 2.1, 2.9, 0.9],  // 2010
                [2.9, 2.2, 3.3, 1.0],  // 2015
                [3.1, 2.3, 3.6, 1.1],  // 2020
                [3.3, 2.5, 4.0, 1.2]   // 2025 预测
            ]
        },
        // 专利申请趋势
        patents: {
            years: [2000, 2005, 2010, 2015, 2020, 2025],
            categories: ['计算机技术', '医药', '电气工程', '机械工程', '其他'],
            data: [
                [85, 60, 75, 90, 140],  // 2000，单位：千件
                [120, 80, 90, 100, 160], // 2005
                [180, 110, 120, 115, 195], // 2010
                [250, 150, 150, 130, 220], // 2015
                [350, 200, 190, 150, 260], // 2020
                [450, 250, 220, 170, 300]  // 2025 预测
            ]
        },
        // 互联网普及率
        internetPenetration: {
            years: [2000, 2005, 2010, 2015, 2020, 2025],
            regions: ['北美', '欧洲', '亚太', '拉美', '中东', '非洲'],
            data: [
                [43, 25, 8, 5, 3, 1],     // 2000
                [68, 46, 12, 17, 8, 2],    // 2005
                [77, 65, 28, 34, 20, 10],   // 2010
                [88, 78, 45, 54, 44, 25],   // 2015
                [95, 87, 65, 71, 70, 43],   // 2020
                [98, 93, 78, 82, 80, 60]    // 2025 预测
            ]
        },
        // 技术领域热度
        techTrends: {
            years: [2015, 2020, 2025],
            trends: ['人工智能', '区块链', '物联网', '5G/6G', '量子计算', '生物技术'],
            data: [
                [35, 10, 45, 15, 5, 25],   // 2015
                [80, 40, 75, 60, 25, 50],   // 2020
                [95, 55, 85, 90, 60, 75]    // 2025 预测
            ]
        }
    },

    // 发展指数数据
    development: {
        // 人类发展指数
        hdi: {
            year: 2023,
            countries: ['挪威', '瑞士', '爱尔兰', '中国', '日本', '法国', '美国', '德国', '加拿大', '新加坡', '巴西', '俄罗斯', '南非', '印度', '肯尼亚'],
            values: [0.957, 0.955, 0.945, 0.768, 0.919, 0.903, 0.926, 0.942, 0.929, 0.938, 0.754, 0.822, 0.713, 0.633, 0.575]
        },
        // 基尼系数
        gini: {
            year: 2023,
            countries: ['挪威', '瑞士', '爱尔兰', '中国', '日本', '法国', '美国', '德国', '加拿大', '新加坡', '巴西', '俄罗斯', '南非', '印度', '肯尼亚'],
            values: [26.8, 32.7, 32.8, 38.5, 32.9, 31.6, 41.5, 31.7, 33.3, 45.9, 53.4, 37.5, 63.0, 35.7, 40.8]
        },
        // 幸福指数
        happiness: {
            year: 2023,
            countries: ['挪威', '瑞士', '爱尔兰', '中国', '日本', '法国', '美国', '德国', '加拿大', '新加坡', '巴西', '俄罗斯', '南非', '印度', '肯尼亚'],
            values: [7.4, 7.5, 7.0, 5.6, 5.9, 6.5, 6.9, 7.0, 7.2, 6.4, 6.3, 5.5, 4.8, 4.0, 4.5]
        }
    }
};

// 向全局导出数据对象
window.visualData = visualData;