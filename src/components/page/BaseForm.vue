<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-document-copy"></i>表单
            </el-breadcrumb-item>
            <el-breadcrumb-item>基本表单</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="form-box">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" >
                <el-form-item label="表单名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="选择器" prop="region">
                    <el-select v-model="form.region" placeholder="请选择">
                    <el-option key="bbk" label="步步高" value="bbl"></el-option>
                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                    <el-col :span="11">
                       <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                      </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="城市级联" prop="options">
                    <el-cascader
                        v-model="form.options"
                        :options="options"></el-cascader>
                </el-form-item>
                <el-form-item label="城市开关">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="多选框" prop="type">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="步步高" name="type"></el-checkbox>
                      <el-checkbox label="小天才" name="type"></el-checkbox>
                      <el-checkbox label="imoo" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="单选框" prop="resource">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="步步高"></el-radio>
                    <el-radio label="小天才"></el-radio>
                    <el-radio label="imoo"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文本框" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')" :disabled="isDisabled">表单提交</el-button>
                    <el-button @click="resetForm('form')">取消</el-button>
                </el-form-item>
                </el-form>
        </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      isDisabled: false,
      options: [
        {
          value: 'guangdong',
          label: '广东省',
          children: [
            {
              value: 'guangzhou',
              label: '广州市',
              children: [
                {
                  value: 'tianhe',
                  label: '天河区'
                },
                {
                  value: 'haizhu',
                  label: '海珠区'
                }
              ]
            },
            {
              value: 'dongguan',
              label: '东莞市',
              children: [
                {
                  value: 'changan',
                  label: '长安镇'
                },
                {
                  value: 'humen',
                  label: '虎门镇'
                }
              ]
            }
          ]
        },
        {
          value: 'hunan',
          label: '湖南省',
          children: [
            {
              value: 'changsha',
              label: '长沙市',
              children: [
                {
                  value: 'yuelu',
                  label: '岳麓区'
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: '',
        options: []
      },
      lastForm: {},
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        options: [
          {required: true, message: '请选择相关城市', trigger: 'change'}
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择一个活动性质', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.lastForm !== this.form) {
            this.$message.success('提交成功')
            this.lastForm = this.form
          } else {
            alert('请勿重复提交')
          }
        } else {
          this.$message.error('请将表单填写完毕再提交')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
