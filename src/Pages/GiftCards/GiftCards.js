import React, { useState } from "react";
import "./GiftCards.css";
import PGift from "./P_Gift/PGift";
import EGift from "./E_Gift/EGift";
export const GiftCards = () => {
  const [active, setActive] = useState("e-giftcard");
  return (
    <section className="a_gift_cards">
      <div className="container my-5">
        <div className="text-center a_btns">
          <button
            onClick={() => setActive("e-giftcard")}
            className={`border a_h12 ${active === "e-giftcard" ? "active" : ""
              }`}
          >
            E-GIFT CARDS
          </button>
          <button
            onClick={() => setActive("p-giftcard")}
            className={`border a_h12 ${active === "p-giftcard" ? "active" : ""
              }`}
          >
            PHYSICAL GIFT CARDS
          </button>
        </div>
        <div className="bg-white my-3 p-3">
          {active === "e-giftcard" && <EGift />}
          {active === "p-giftcard" && <PGift />}
        </div>
        <div className="row mt-5 a_redlite_color2 text-center">
          <div className="col-12 col-md-4">
            <h6>Terms & Conditions</h6>
          </div>
          <div className="col-12 col-md-4">
            <h6>Need Help?</h6>
          </div>
          <div className="col-12 col-md-4">
            <h6>Cheak Gift Card Balance</h6>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="text-center">
          <h5 className="fw-normal">BOOKMYSHOW GIFT CARDS</h5>
        </div>
        <p className="a_h12 w-75 mx-auto text-center my-4">
          Gift an experience to your loved ones like never before! Give them a
          gift of fun and entertainment with BookMyShow gift cards. Whatever be
          the occasion, a BookMyShow Gift Card is just right to delight someone.
          From birthdays, anniversaries, festivals to special occasions, there
          is a wide selection of quirky and cool gift cards you can choose from.
        </p>
        <p className="a_h12 w-75 mx-auto text-center my-3">
          Redeem your gift card at the secure payment page while booking your
          tickets. Click on the "Gift Voucher" tab and enter your Gift Card
          code.
        </p>
        <div
          style={{ width: "80%" }}
          className="mx-auto my-5 border py-3 px-4 rounded-3"
        >
          <h6 className="a_h12 mb-3 text-muted">
            Some useful tips while using Gift Cards
          </h6>
          <ul className="a_h12 text-muted">
            <li>
              Gift cards can be redeemed on purchase of tickets for Movies,
              Plays, Concerts, Sports and Events across India.
            </li>
            <li>Valid for twelve months from the date of delivery.</li>
            <li>
              Multiple gift cards can be used in a single transaction. A gift
              card can be used any number of times during the validity period
              till its balance is exhausted.
            </li>
            <li>
              A gift card can be used any number of times during the validity
              period till its balance is exhausted.
            </li>
          </ul>
        </div>
      </div>
      <div style={{padding:"0px 160px", background: "#F2F2F2" }} className="text-muted a_h12 mx-auto">
        <h6 className="a_h12 text-center pt-4">Experience The Freedom With BookMyShow Gift Cards!</h6>
        <p className="py-4 text-center">
          Are you running out of ideas to gift your loved ones on their
          birthdays, anniversaries and festivals like Holi, Diwali, Eid,
          Christmas and New Year? The occasions are unending and it is
          definitely difficult to decide on things to gift to your loved ones.
          BookMyShow has come up with a perfect way to relieve you and make your
          gifting occasions special. Delight and get delighted with the festive
          gift cards and birthday gift options with customised messages to send
          to your special people. This is also the perfect gift to say
          congratulations to someone, expressing your love, saying thank you, or
          just saying sorry. With these latest feature of instant{" "}
          <strong>gift vouchers</strong> and online gift cards, you have the
          perfect opportunity to get the proper leeway to choose your{" "}
          <strong>favourite snacks</strong> and <strong>movies</strong> at the
          time you want to use them. Blast away the old and boring gifting ideas
          and surprise your dear ones with our cool e-gift cards. Whatever be
          the occasion, there's a gift coupon that awaits you and your loved
          ones. With prices ranging from a few hundred bucks to a few thousand,
          you now have the power to make someone’s movie watching experience
          bigger, better and more convenient. From birthdays, anniversaries,
          festivals to special occasions, there is a wide selection of quirky
          and cool gift cards and coupons, you can choose from, for your friends
          and family. You can also opt for the Combo Gift Cards where you can
          gift both a movie and a dining experience together, and avail some
          enticing offers and enjoy while you can. BookMyShow Gift Cards can be
          used to purchase any tickets on BookMyShow - be it movies, events,
          sports, plays or unique experiences. Here at BookMyShow, buy a gift
          card that suits the purpose in the best way and delight your loved
          ones by making their life special and exciting!
        </p>
      </div>
    </section>
  );
};
