<template>
  <div id="addGoods">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="ruleForm.desc" placeholder="请输入商品描述"></el-input>
      </el-form-item>

      <el-form-item label="商品原价" prop="price1">
        <el-input v-model.number="ruleForm.price1" placeholder="请输入商品原价"></el-input>
      </el-form-item>
      <el-form-item label="商品现价" prop="price2">
        <el-input v-model.number="ruleForm.price2" placeholder="请输入商品现价"></el-input>
      </el-form-item>

      <el-form-item label="商品种类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择商品种类">
          <el-option label="男装" value="男装"></el-option>
          <el-option label="女装" value="女装"></el-option>
          <el-option label="童装" value="童装"></el-option>
          <el-option label="男鞋" value="男鞋"></el-option>
          <el-option label="女鞋" value="女鞋"></el-option>
          <el-option label="童鞋" value="童鞋"></el-option>

        </el-select>
      </el-form-item>

      <el-form-item label="上传时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <!-- 上传图片 -->
      <!--
            :auto-upload=false  // 取消自动上传
            :on-remove="handleRemove" // 处理删除图片的操作
            :on-change="onchange" // 通过onchange这个属性来获取现在的图片和所有准备上传的图片
            :limit=1 // 限制只能上传一张，这里暂时只考虑一张图片的情况
            :on-exceed超出个数限制的回调
            drag // 设置这个让可以把图片拖进来上传
            action="" // 这里暂时不设置上传地址，因为我们是要拦截在form中上传
            multiple同时选择多张图片
            -->
      <el-form-item label="商品大图" prop="bigImg">
        <el-upload class="upload-demo" ref="bigImg" action="" :auto-upload=false :on-change="onchange" :on-remove="handleRemove" :limit=1 :on-exceed="handleLimit">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip bigImg_tip">只能上传jpg/png文件，且不超过500kb,只能上传一张</div>
        </el-upload>
      </el-form-item>

      <!-- 商品小图 -->
      <el-form-item label="商品小图" prop="smallImgs">
        <el-upload class="upload-demo" ref="smallImgs" action="" :auto-upload=false :on-change="smallImgsOnchange" :on-remove="smallImgsHandleRemove" :limit=6 :on-exceed="smallImgsHandleLimit" multiple>
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip bigImg_tip">只能上传jpg/png文件，且不超过500kb,最多上传6张</div>
        </el-upload>
      </el-form-item>

      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加商品</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 记录所删除小图片的下标
      index: 0,
      //商品大图信息
      bigImgFile: "",
      //商品小图
      smallImgFiles: [],
      //---------------------- 表单数据-----------------------------------------------------------------------------------------
      ruleForm: {
        bigImg: "",
        //商品名称
        name: "",
        // 商品描述
        desc: "",
        //商品大图
        bigPic: "",
        //商品小图
        smallPic: [],

        // 商品原价
        price1: "",
        //商品现价
        price2: "",
        // 商品种类
        region: "",
        // 上传时间
        date1: ""
      },
      //  -----------------------------------------------------表单处理规则-----------------------------------------------------
      //required:必填字段，trigger:触发时机，message:提示信息
      rules: {
        //商品名称
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        //商品描述
        desc: [{ required: true, message: "请填写商品描述", trigger: "blur" }],
        //商品原价
        price1: [
          { required: true, message: "原价不能为空" },
          { type: "number", message: "价格必须为数字值" }
        ],
        //商品现价
        price2: [
          { required: true, message: "现价不能为空" },
          { type: "number", message: "价格必须为数字值" }
        ],
        //商品种类
        region: [
          { required: true, message: "请选择商品种类", trigger: "change" }
        ]
        //商品大图
        // bigImg: [{ required: true, message: "必须上传大图" }]
      }
    };
  },
  methods: {
    //-----------------------------------------商品大图处理操作-----------------------------------------------------------------
    //   通过onchange这个属性来获取现在的图片和所有准备上传的图片
    onchange(file, filesList) {
      //将大图片的信息保存到this.bigImgFile,便于后期加入formdata中
      this.bigImgFile = file.raw;
    },
    // 处理删除图片的操作
    handleRemove(file, filesList) {
      this.bigImgFile = "";
      this.$message.success("删除成功");
    },
    //超出数量限制操作
    handleLimit() {
      this.$message.error("最多只能上传1张图片");
    },

    //----------------------------------------------商品小图处理操作------------------------------------------------------
    //   通过onchange这个属性来获取现在的图片和所有准备上传的图片(每张图片都会调用这个函数，所以，直接加入到formdata中)
    smallImgsOnchange(file, filesList) {
      this.smallImgFiles.push(file.raw);
    },
    // 处理删除图片的操作
    smallImgsHandleRemove(file, filesList) {
      var uid = file.uid;
      // 通过所需删除元素的uid，获取下标
      this.smallImgFiles.filter((item, index) => {
        if (item.uid == uid) {
          this.index = index;
          return;
        }
      });
      //从数组中删除该元素
      this.smallImgFiles.splice(this.index, 1);
      // console.log(this.smallImgFiles);
      this.$message.success("删除成功");
    },
    //超出数量限制操作
    smallImgsHandleLimit() {
      this.$message.error("最多只能上传6张图片");
    },

    //----------------------------------------------点击  添加商品-------------------------------------------------
    submitForm(formName) {
      //validate对整个表单进行校验的方法。若不传入回调函数，则会返回一个 promise
      this.$refs[formName].validate(valid => {
        //   都符合要求
        if (valid) {
          let formData = new FormData();
          formData.append("name", this.ruleForm.name);
          formData.append("desc", this.ruleForm.desc);
          formData.append("price1", this.ruleForm.price1);
          formData.append("price2", this.ruleForm.price2);
          formData.append("region", this.ruleForm.region);
          formData.append("data1", this.ruleForm.date1);
          //   商品大图
          formData.append("bigImg", this.bigImgFile);
          //商品小图,遍历，加入到formdata中
          for (var i = 0, len = this.smallImgFiles.length; i < len; i++) {
            formData.append("smallImgs", this.smallImgFiles[i]);
          }
          //获取所有的商品小图
          // console.log(formData.getAll("smallImgs"));
          axios({
            method: "post",
            url: "/api/goods/addGoods",
            data: formData,
            // 必须设置请求头 multipart/form-data
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(data => {
            if (data.status) {
              //resetFields对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
              this.$refs[formName].resetFields();
              //清空上传的文件
              this.$refs.bigImg.clearFiles();
              this.$refs.smallImgs.clearFiles();

              alert("添加成功");
            }
          });
        } else {
          //清空上传的文件
          this.$refs.bigImg.clearFiles();
          this.$refs.smallImgs.clearFiles();
          alert("商品信息不完整");
          return false;
        }
      });
    },

    //-----------------------------------------------点击 重置 按钮----------------------------------------------------------
    resetForm(formName) {
      //resetFields对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
#addGoods {
  width: 600px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
<style>
/* 修改elementui样式 */
.bigImg_tip {
  display: inline-block;
}
</style>
