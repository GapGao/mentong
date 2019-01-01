<template>
  <el-row :gutter="12" class="actions">
    <el-col :span="8">
      <el-form label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="user.account" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" disabled></el-input>
        </el-form-item>
        <el-form-item label="到期时间">
          <span>{{ user.expiredAt | dateFormat }}</span>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  }
};
</script>
