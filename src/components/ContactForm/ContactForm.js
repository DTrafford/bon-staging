import React from "react";
import * as S from './styles';
import Card from '../Card/Card'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Card header="Contact Me">
        <S.FormWrapper>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mqkyrprw"
            method="POST"
          >
            {/* <!-- add your custom form HTML here --> */}
            <S.FormRow>
              <S.FormItem>
                <S.FormLabel>First Name:</S.FormLabel>
                <S.FormInput type="text" name="firstname" />
              </S.FormItem>
              <S.FormItem>
                <S.FormLabel>Last Name:</S.FormLabel>
                <S.FormInput type="text" name="lastname" />
              </S.FormItem>
            </S.FormRow>
            <S.FormRow>
              <S.FormItem>
                <S.FormLabel>Email:</S.FormLabel>
                <S.FormInput type="email" name="email" />
              </S.FormItem>
              <S.FormItem>
                <S.FormLabel>Phone:</S.FormLabel>
                <S.FormInput type="text" name="phone" />
              </S.FormItem>
            </S.FormRow>
            <S.FormRow>
              <S.FormItem>
                <S.FormLabel>Message:</S.FormLabel>
                <S.FormTextArea name="message" rows={6} />
              </S.FormItem>
            </S.FormRow>
            {status === "SUCCESS" ? <p style={{ color: '#C36A82' }}>Thanks!</p> : <S.SubmitButton>Submit</S.SubmitButton>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </S.FormWrapper>
      </Card>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}