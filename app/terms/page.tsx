import type { Metadata } from "next";
import PolicyLayout from "../PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Friday Agent",
  description: "Terms and SMS notification information for Friday Agent.",
};

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>These terms apply to Friday Agent, a private personal assistant operated by Eduardo Valdovinos, and its personal SMS notification program. Friday Agent is intended for its owner’s use; it does not provide public enrollment or marketing messaging.</p>
      <h2>SMS Terms</h2>
      <p>By expressly enabling SMS notifications for your phone number, you agree to receive recurring automated messages from Friday Agent about personal reminders, important alerts, and coding-project completion or failure. Message frequency varies. Consent is optional and is not a condition of purchase.</p>
      <ul>
        <li><strong>Charges:</strong> Message and data rates may apply. Your mobile carrier’s messaging and data plan applies.</li>
        <li><strong>Opt out:</strong> Reply STOP to unsubscribe. You may also disable SMS in Friday Agent’s local configuration. After opting out, you will not receive further program messages unless you opt back in; a final opt-out confirmation may be sent by the messaging provider.</li>
        <li><strong>Support:</strong> For assistance, email <a href="mailto:eduardo.valdo21@gmail.com">eduardo.valdo21@gmail.com</a> or use Friday Agent’s local interface.</li>
        <li><strong>Delivery:</strong> Delivery depends on Twilio, carrier networks, connectivity, and applicable sender approvals. Messages may be delayed, blocked, or undelivered. Carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <h2>Authorized use</h2>
      <p>Incoming SMS commands are limited to the configured owner’s number and subject to signature checks, message-size limits, and rate limits. Do not use the service to send spam, access another person’s data, or carry out unauthorized actions. No one may enroll another recipient without their consent.</p>
      <h2>Project notifications and reliability</h2>
      <p>A notification reports an event recorded by the coding workflow. A completed coding turn does not independently guarantee that an application is correct, secure, or ready for production. Review the project and its test results before relying on it.</p>
      <p>Friday Agent and SMS notifications are provided as available. Do not rely on this service as your only source of urgent reminders, emergency alerts, or other time-critical information. The owner may pause or discontinue the program.</p>
      <h2>Privacy and changes</h2>
      <p>The <a href="/privacy/">Privacy Policy</a> explains how notification information is used. Changes to these terms will be published here with a revised effective date. For questions, contact <a href="mailto:eduardo.valdo21@gmail.com">eduardo.valdo21@gmail.com</a>.</p>
    </PolicyLayout>
  );
}
