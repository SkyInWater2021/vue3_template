<script setup lang="ts">
interface ILinkData {
  name: string
  href: string
  description: string
}
interface ILayout {
  span?: number
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
}
interface IProps {
  linkData: ILinkData[]
  colLayout?: ILayout
}

withDefaults(defineProps<IProps>(), {
  colLayout: () => ({
    xl: 8, // ≥1920px
    lg: 12, // ≥1200px
    md: 12, // ≥992px
    sm: 24, // ≥768px
    xs: 24 // <768px
  })
})
</script>

<template>
  <div class="base-text-link">
    <el-row :gutter="30">
      <template v-for="(item, index) in linkData" :key="index">
        <el-col v-bind="colLayout">
          <div class="content">
            <span class="title">{{ item.name }} : </span>
            <el-link type="primary" :href="item.href" target="_blank">
              {{ item.description }}
            </el-link>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.base-text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .content {
    margin: 5px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>
