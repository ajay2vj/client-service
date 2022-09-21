import React, { useRef } from "react";
import { Button, Form, Input } from 'antd';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
export default function Contact(){
  const form = useRef();

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const sendEmail = (e) => {
    e?.preventDefault();

    emailjs.sendForm('service_lbhqqnn', 'template_sztzuk3', form.current, 'HVl-QagINRHqIOX7i')
      .then((result) => {
        toast(`${result.text} Thanks for contacting us!`)
        form.reset()
          // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // const onReset = () => {
  //   form.resetFields();
  // };
  return(
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-5 pt-20">
            <h2 className="p-4 text-center ml-10" style={{fontSize: '20px'}}>Contact form</h2>
            <form ref={form} name="control-hooks" onSubmit={(e)=> sendEmail(e)}>
              <Form.Item label="Email">
                <Input name="user_email" type="email"/>
              </Form.Item>
              <Form.Item label="Name">
                <Input type="text" name="user_name"/>
              </Form.Item>
              <Form.Item label="Mobile">
                <Input type="number" name="mobile_number"/>
              </Form.Item>
              <Form.Item label="Message">
                <Input.TextArea name="message"/>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <div className="flex gap-3">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}