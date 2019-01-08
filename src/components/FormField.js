import React, { Fragment } from "react";
import {
  Row,
  Col,
  Form,
  DatePicker,
  Input,
  Button,
  Switch,
  Select,
  Slider,
  InputNumber
} from "antd";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import './FormField.css'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const dateInput = {
  width: '160px'
}


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 }
  }
};
const carbMark = {
  0: "0%",
  25: {
    style: {
      color: "#ddd"
    },
    label: "25%"
  },
  55: {
    style: {
      color: "#ddd"
    },
    label: "55%"
  },
  100: "100%"
};
const proteinMark = {
  0: "0%",
  20: {
    style: {
      color: "#ddd"
    },
    label: "20%"
  },
  55: {
    style: {
      color: "#ddd"
    },
    label: "55%"
  },
  100: "100%"
};
const fatMark = {
  0: "0%",
  15: {
    style: {
      color: "#ddd"
    },
    label: "15%"
  },
  45: {
    style: {
      color: "#ddd"
    },
    label: "45%"
  },
  100: "100%"
};
class HorizontalLoginForm extends React.Component {
  state = {
    checked: false
  };
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleHeightUnit = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched("userName") && getFieldError("userName");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    const dobError = isFieldTouched("dob") && getFieldError("dob");
    const activityError =
      isFieldTouched("activity") && getFieldError("activity");
    const carbError = isFieldTouched("carb") && getFieldError("carb");
    const proteinError = isFieldTouched("protein") && getFieldError("protein");
    const fatError = isFieldTouched("fat") && getFieldError("fast");

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? "error" : ""}
          help={userNameError || ""}
          label="Enter Weight"
          {...formItemLayout}
        >
          <Row gutter={8}>
            <Col span={8}>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(<Input placeholder="Weight" />)}
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
          label="Enter Height"
        >
          <Row gutter={8}>
            <Switch
              checkedChildren="cm"
              unCheckedChildren="cm"
              onChange={this.handleHeightUnit}
            />
            {this.state.checked ? (
              <Col span={8}>
                {getFieldDecorator("cm", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input placeholder="cm" />)}
              </Col>
            ) : (
              <Fragment>
                <Col span={8}>
                  {getFieldDecorator("foot", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(<Input placeholder="Foot" />)}
                </Col>
                <Col span={8}>
                  {getFieldDecorator("inch", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(<Input placeholder="Inch" />)}
                </Col>
              </Fragment>
            )}
          </Row>
        </Form.Item>
        <Form.Item
          label="Select DOB"
          {...formItemLayout}
          validateStatus={dobError ? "error" : ""}
          help={dobError || ""}
        > 
              {getFieldDecorator("dob", {
                rules: [{ required: true, message: "Please select your DOB!" }]
              })(<DatePicker showToday={false}/>)}
    
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Select"
          validateStatus={activityError ? "error" : ""}
          help={activityError || ""}
        >
          {getFieldDecorator("activity", {
            rules: [{ required: true, message: "Please select your country!" }]
          })(
            <Select placeholder="Please select an activity level">
              <Select.Option value="sedentary">
                Sedentary: little or no exercise
              </Select.Option>
              <Select.Option value="lightly_active">
                Lightly Active: light exercise or sports 1-3 days per week
              </Select.Option>

              <Select.Option value="active">
                Active: moderate exercise or sports 3-5 days per week
              </Select.Option>
              <Select.Option value="very_active">
                Very Active: hard exercise or sports 6-7 days per week
              </Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Select Carb"
          {...formItemLayout}
          validateStatus={carbError ? "error" : ""}
          help={carbError || ""}
        >
          <Row gutter={32}>
            <Col span={6}>
              {getFieldDecorator("carb", {
                rules: [
                  { required: true, message: "Please select your carb!" }
                ],
                initialValue: 45
              })(
                <InputNumber
                  style={{ width: "78px" }}
                  formatter={value => `${value}%`}
                />
              )}
            </Col>
            <Col span={18}>
              {getFieldDecorator("carb", {
                rules: [
                  { required: true, message: "Please select your carb!" }
                ],
                initialValue: 45
              })(<Slider marks={carbMark} step={1} />)}
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label="Select Protein"
          {...formItemLayout}
          validateStatus={proteinError ? "error" : ""}
          help={proteinError || ""}
        >
          <Row gutter={32}>
            <Col span={6}>
              {getFieldDecorator("protein", {
                rules: [
                  { required: true, message: "Please select your carb!" }
                ],
                initialValue: 30
              })(
                <InputNumber
                  style={{ width: "78px" }}
                  formatter={value => `${value}%`}
                />
              )}
            </Col>
            <Col span={18}>
              {getFieldDecorator("protein", {
                rules: [
                  { required: true, message: "Please select your carb!" }
                ],
                initialValue: 30
              })(<Slider marks={proteinMark} step={1} />)}{" "}
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Select Fat"
          {...formItemLayout}
          validateStatus={fatError ? "error" : ""}
          help={fatError || ""}
        >
          <Row gutter={32}>
            <Col span={6}>
              {getFieldDecorator("fat", {
                rules: [{ required: true, message: "Please select your fat!" }],
                initialValue: 25
              })(
                <InputNumber
                  style={{ width: "78px" }}
                  formatter={value => `${value}%`}
                />
              )}
            </Col>
            <Col span={18}>
              {getFieldDecorator("fat", {
                rules: [{ required: true, message: "Please select your fat!" }],
                initialValue: 25
              })(<Slider marks={fatMark} step={1} />)}
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row type="flex" justify="center">
            <Col span={12} offset={6}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Calculate
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const FormField = Form.create()(HorizontalLoginForm);
export { FormField };
