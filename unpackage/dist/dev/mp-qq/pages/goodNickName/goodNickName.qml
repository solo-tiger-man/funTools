<view><cu-custom vue-id="52030ba0-1" isBack="{{true}}" bgColor="bg-gradual-blue" bind:__l="__l" vue-slots="{{['content']}}"><view slot="content">炫酷昵称</view></cu-custom><view style="height:120px;"><view class="cu-form-group pading-tr text-lg"><input class="weui-text-bar__input" type="text" placeholder="请输入昵称" name="input" data-event-opts="{{[['input',[['setName',['$event']]]]]}}" bindinput="__e"/></view><view class="text-center padding-lr bg-white"><view class="solid-bottom padding text-lg"><text>{{result}}</text></view></view></view><scroll-view style="{{'height:'+(windowHeight-120+'px')+';'}}" scroll-y="{{true}}"><block qq:for="{{list}}" qq:for-item="item" qq:for-index="index" qq:key="class"><view class="nickNameType"><view class="flex justify-center">{{''+item.class+''}}</view><view class="padding-sm"><view class="flex flex-wrap justify-around"><block qq:for="{{item.datalist}}" qq:for-item="nickName" qq:for-index="index" qq:key="index"><button class="margin-sm  shadow cu-btn bg-white" style="font-size:23rpx;flex-basis:44%;" index="{{index}}" value11="{{nickName}}" data-event-opts="{{[['tap',[['genNickName',['$0'],[[['list','class',item.class],['datalist','',index]]]]]]]}}" bindtap="__e">{{''+nickName+''}}</button></block></view></view></view></block></scroll-view></view>