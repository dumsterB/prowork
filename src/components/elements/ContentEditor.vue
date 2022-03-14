<template>
  <div>
    <customQuillModule></customQuillModule>
    <quillEditor v-model:value="state.content"
                 @blur="onEditorBlur($event)"
                 @focus="onEditorFocus($event)"
                 @ready="onEditorReady($event)"
                 @change="onEditorChange($event)">
    </quillEditor>
  </div>
  <div class="buttonContent">
    <a-button type="primary" size="large" class="addBtn" align="end">Добавить</a-button>
  </div>

</template>

<script>
import {defineComponent, reactive} from "vue";
import {quillEditor} from 'vue3-quill'

export default defineComponent({
  components: {
    quillEditor
  },
  setup() {
    const state = reactive({
      dynamicComponent: null,
      content: '<p></p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          toolbar: [
            // custom toolbars options
            // will override the default configuration
          ],
          // other moudle options here
        }
        // more options
      },
      disabled: false
    })

    const onEditorBlur = quill => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = quill => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = quill => {
      console.log('editor ready!', quill)
    }
    const onEditorChange = ({quill, html, text}) => {
      console.log('editor change!', quill, html, text)
      state._content = html
    }

    setTimeout(() => {
      state.disabled = true
    }, 2000)

    return {state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange}
  }
})
</script>

<style scoped>
.addBtn{
  margin-top: 10px;
}
.buttonContent{
  justify-content: flex-end;
  display: flex;
}
</style>