<script lang="ts" setup>
import BaseCard from '@/base-ui/card'
import BaseDescription from '@/base-ui/description'
import BaseTextLink from '@/base-ui/text-link'

import { dependencies, devDependencies, technologyStacks, commandConfig } from './config'
</script>

<template>
  <div class="start-view com_hide_scrollbar">
    <BaseCard title="关于" class="base-card">
      <div class="introduce">华信前端项目基础模板 beta-1.0版</div>
    </BaseCard>

    <BaseCard title="技术栈" class="base-card">
      <BaseTextLink :linkData="technologyStacks" />
      <BaseDescription title="生产环境依赖" :column="3" :descriptionData="dependencies" />
      <BaseDescription title="开发环境依赖" :column="3" :descriptionData="devDependencies" />
    </BaseCard>

    <BaseCard title="项目脚本命令" class="base-card">
      <BaseDescription title="npm" :column="3" :descriptionData="commandConfig" />
    </BaseCard>

    <BaseCard title="项目规范" class="base-card">
      <div class="introduce">阿里巴巴前端规范</div>
    </BaseCard>

    <BaseCard title="Git提交规范" class="base-card">
      <div class="introduce">...</div>
    </BaseCard>

    <BaseCard title="关于Mock" class="base-card">
      <div class="introduce">...</div>
    </BaseCard>

    <BaseCard title="待续..." class="base-card">
      <div class="introduce"></div>
    </BaseCard>
  </div>
</template>

<style lang="less" scoped>
.start-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 50px;
}

.base-card {
  margin-bottom: 20px;
}
.introduce {
  padding-left: 20px;
}
.code-box {
  box-sizing: border-box;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  background: rgb(245, 245, 245);
}
</style>
