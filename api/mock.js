import Mock from 'mockjs'
import homeApi from './mockServerData/home'
// 5.7
import userApi from './mockServerData/user'


Mock.mock('/home/getData', homeApi.getStatisticalData)

// 5.7
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)

// 5.8
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'post', userApi.deleteUser)
