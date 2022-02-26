import React from "react";
import Fade from "react-reveal/Fade";


import { InputText, InputFile } from "elements/Form";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;

  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const totalPriceWithTax = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container text-secondary" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h4 className="h4 font-weight-bold mb-3">Transfer Payment Detail:</h4>
            <div className="tax py-1 d-flex justify-content-between">
              <p>Tax: </p>
              <p>{tax}%</p>
            </div>
            <div className="sub-total py-1 d-flex justify-content-between">
              <p>Sub total: </p>
              <p>${subTotal} USD</p>
            </div>
            <div className="total-price font-weight-bold py-2 d-flex justify-content-between border-top border-secondary">
              <p>Total:</p>
              <p>${totalPriceWithTax} USD</p>
            </div>
            {itemDetails.bank.map((item) => {
              return (
                <div className="bank-company d-flex justify-content-start align-items-center mb-3" key={item._id}>
                  <img src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item.bankName} width="100" />
                  <dl className="ml-5 mb-0 font-weight-bold">
                    <dd>Bank {item.bankName}</dd>
                    <dd>{item.bankNumber}</dd>
                    <dd>{item.accountHolder}</dd>
                  </dl>
              </div>
              )
            })}
          </div>
          <div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
            <InputFile
              accept="image/*"
              id="proofPayment"
              name="proofPayment"
              value={data.proofPayment}
              onChange={props.onChange}
            />

            <label htmlFor="bankName">Asal Bank</label>
            <InputText
              id="bankName"
              name="bankName"
              type="text"
              value={data.bankName}
              onChange={props.onChange}
            />

            <label htmlFor="bankHolder">Nama Pengirim</label>
            <InputText
              id="bankHolder"
              name="bankHolder"
              type="text"
              value={data.bankHolder}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
