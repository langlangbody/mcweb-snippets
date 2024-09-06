<!--
 * @Author: xll
 * @Date: 2020-06-06 22:12:57
 * @LastEditors: xll
 * @LastEditTime: 2021-04-26 16:44:00
 * @FilePath: /mcweb-snippets/README.md
-->
## This is Code Snippets of mcweb for VS Code.

### Install

#### Manual Install
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020060809502338.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Jlc19taW4=,size_16,color_FFFFFF,t_70#pic_center)


#### Basic Part
|No.|Trigger&nbsp;Key|Element Tag|
|:------:|:--------------:|:--------|
|1. | `muflitem` | `mu-flex-item` |
|2. | `muflbox` | `<mu-flex-box>` |
|3. | `muhbox` | `<mu-h-box>` |
|4. | `muvbox` | `<mu-v-box>` |
|5. | `muspace` | `<mu-space>` |
|6. | `musplitter` | `<mu-splitter>` |
|7. | `mub` | `<mu-button>` |
|8. | `mubi` | `<mu-icon-button>` |
|9. | `mubg` | `<mu-button-group>` |


#### Navigation Part
|No.|Trigger&nbsp;Key|Element Tag|
|:------:|:--------------:|:--------|
|1. | `mubar` | `mu-bar` |
|2. | `mutabs` | `<mu-tabs>` |
|3. | `mutabpanel` | `<mu-tab-panel>` |
|4. | `mudr` | `<mu-dropdown>` |
|5. | `mudri` | `<mu-dropdown-item>` |



#### Form Part

|No. |  Trigger&nbsp;Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `muform` | `<mu-form>` |
|2. | `muformfield` | `<mu-form-field>` |
|3. | `muformrow` | `<mu-form-row>` |
|4. | `mui` | `<mu-input>` |
|5. | `muedi` | `<mu-editor>` |
|6. | `mucobox` | `<mu-combo-box>` |
|7. | `mudateeditor` | `<mu-date-editor>` |


#### Notice Part

|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `mumeal` | `alert('',()=>{})` |
|2. | `mumecon` | 	`confirm('',btn=>{})` |
|3. | `mumewar` | 	`warn('',btn=>{})` |
|4. | `munot` | 	`notify('info|success|warning|error','message')` |


#### Others Part
|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `mudi` | `<mu-dialog>` |
|2. | `muorgid` | `this.$context.orgId` |


#### Store Part
|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `mustodp` | `await this.$store.dispatch(method, params)` |
|2. | `mustocm` | `this.$store.commit(method, params)` |


#### document Part
|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `mudoc` | docTemplate |


#### grid
|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `muKakaGrid` | kakaGrid-template |


#### apiAction
|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `mcApiTemp` | 请求模版文件 |

#### mcInject

```js
const http = inject('http')
const context = inject('context')
const { messageBox } = inject('$mussel')
const application = inject('application')
```

## 新增vue3 相关API 

 使用方式 `vue3-`

 ## 新增 mussel base-style
  - background
  - border
  - margin
  - padding
  - text
  - shadow

## 新增 layout 文件中相关style  flex 对齐样式 