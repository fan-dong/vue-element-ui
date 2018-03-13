import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/Login',
            component: resolve => require(['../components/page/Login.vue'],resolve),
        },
        {
            path: '/Home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/Table',
                    component: resolve => require(['../components/page/Table.vue'], resolve)
                },
                {
                    path: '/From',
                    component: resolve => require(['../components/page/From.vue'], resolve)
                },
                {
                    path: '/Cascader',
                    component: resolve => require(['../components/page/Cascader.vue'], resolve)
                },
                {
                    path: '/Checkbox',
                    component: resolve => require(['../components/page/Checkbox.vue'], resolve)
                },
                {
                    path: '/ColorPicker',
                    component: resolve => require(['../components/page/ColorPicker.vue'], resolve)
                },
                {
                    path: '/DatePicker',
                    component: resolve => require(['../components/page/DatePicker.vue'], resolve)
                },
                {
                    path: '/DateTimePicker',
                    component: resolve => require(['../components/page/DateTimePicker.vue'], resolve)
                },
                {
                    path: '/TimePicker',
                    component: resolve => require(['../components/page/TimePicker.vue'], resolve)
                },
                {
                    path: '/Input',
                    component: resolve => require(['../components/page/Input.vue'], resolve)
                },
                {
                    path: '/InputNumber',
                    component: resolve => require(['../components/page/InputNumber.vue'], resolve)
                },
                {
                    path: '/Radio',
                    component: resolve => require(['../components/page/Radio.vue'], resolve)
                },
                {
                    path: '/Rate',
                    component: resolve => require(['../components/page/Rate.vue'], resolve)
                },
                {
                    path: '/Select',
                    component: resolve => require(['../components/page/Select.vue'], resolve)
                },
                {
                    path: '/Slider',
                    component: resolve => require(['../components/page/Slider.vue'], resolve)
                },
                {
                    path: '/Switch',
                    component: resolve => require(['../components/page/Switch.vue'], resolve)
                },
                {
                    path: '/Transfer',
                    component: resolve => require(['../components/page/Transfer.vue'], resolve)
                },
                {
                    path: '/Upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)
                },
                {
                    path: '/Botton',
                    component: resolve => require(['../components/page/Botton.vue'], resolve)
                }
            ]
        }
       
    ]
})
