// const ABOUT_CONTENT = require('raw-loader!./about_zh.html');
import ABOUT_CONTENT from './about_zh.html';

export default {
  switch_lang: '切换语言',
  English: 'English',
  Chinese: '中文',
  Japanese: '日本語',
  world_view: '世界',
  token_view: '通证',
  about_view: '关于',
  login: '登录',
  logout: '登出',
  back: '后退',
  filter_country_or_region: '选择国家或地区',
  my_EOS: '我的EOS',
  my_CMU: '我的CMU',
  my_staked: '我的抵押',
  total_staked: '总共抵押',
  my_dividend: '我的分红',
  total_dividend: '合计分红',
  contract_supply: '合约发行量',
  contract_balance: '合约储备金',
  contract_price: '合约币价',

  payout_pool_tab: '红利池',
  my_assets_tab: '我的资产',
  stake_tab: '抵押',
  bancor_trade_tab: 'Bancor交易',

  stake_btn: '抵押',
  unstake_btn: '取消抵押',
  buy_btn: '购买',
  sell_btn: '卖出',
  claim_btn: '领取分红',
  payout_btn: '红利',

  last_buyer: '最后的买家',
  count_down: '剩余时间',
  prize_pool: '奖池',
  ABOUT_CONTENT,

  cmu_creator: '由Cryptomeetup（币聚）团队倾力打造',
  powered_by: 'Powered By',

  stake_number_alert: '你要抵押多少CMU？ （输入如： 1.0000 CMU， 保留后四位小数点）',
  stake_successful_alert: 'CMU 代币抵押成功',
  stake_pay_attention_alert: '稍后留意 My Staked',
  stake_confirmed_btn: '确认',
  unstake_alert: '撤销抵押会将全部抵押CMU撤销',
  claim_success: '提取成功',
  wait_alert: '请耐心等待',
  claim_fail: '提取失败',
  buy_cmu_alert: '你要购买多少EOS等值的CMU？ （输入如： 1.0000 EOS， 保留后四位小数点）',
  buy_cmu_success_alert: 'CMU 代币购买成功',
  after_buy_cmu_alert: '稍后留意 CMU 余额变动',
  buy_cmu_alert: '你要卖出多少CMU？ （输入如： 1.0000 CMU，保留后四位小数点）',
  ok: '好的',
  sell_cmu_success_alert: 'CMU 成功卖出',
  after_sell_cmu_alert: '稍后留意 EOS 余额变动',
  scatter_login_fail: 'Scatter登入失败：用户的Scatter钱包已被锁定，在进行下一步之前用户已经被通知',
  scatter_login_success: '成功使用Scatter钱包登录',
};
