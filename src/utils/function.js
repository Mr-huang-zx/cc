import { MessageBox } from 'element-ui';

/**
 * 
 * @param {*} title 弹窗标题
 * @param {*} textWord 弹窗内容
 * @param {*} checkText 确定按钮文字
 * @returns 
 */
export function confirmDio(title,textWord,checkText){
    return new Promise((resolve)=>{
        MessageBox({
            title: title,
            message: textWord,
            showCancelButton: true,
            confirmButtonText: checkText,
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
                done();
                if (action === 'confirm') {
                    return resolve(true)
                } else {
                    return resolve(false)
                }
            }
        }).then(()=>{}).catch(()=>{})
    })
    
}