import type { Metadata } from "next";
import PolicyLayout from "../PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Friday Agent",
  description: "Privacy information for Friday Agent, a private personal assistant operated by Eduardo Valdovinos.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>Friday Agent is a private, self-hosted personal assistant operated by Eduardo Valdovinos. Its SMS program sends personal reminders, important alerts, and coding-project completion or failure notifications to its owner. It is not a public signup service and does not send marketing messages.</p>
      <h2>Information we process</h2>
      <p>For SMS notifications, Friday Agent processes the owner’s phone number, notification preferences and consent settings, message content, incoming commands, and message delivery records. Local records may also include project names, event identifiers, and timestamps used to send relevant alerts and avoid duplicates.</p>
      <p>When you visit this portfolio, its hosting provider may process technical request information, such as your IP address, browser information, and access times, to serve and protect the website. Following an external link takes you to that provider’s site and privacy practices.</p>
      <h2>How information is used</h2>
      <p>Information is used to deliver requested notifications, process authorized incoming messages, secure the assistant, troubleshoot delivery, and prevent duplicate or abusive requests. Message frequency varies based on reminders, important events, and coding activity.</p>
      <h2>SMS privacy and service providers</h2>
      <p><strong>We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes.</strong></p>
      <p>Twilio and telecommunications carriers process phone numbers, SMS content, and delivery information as necessary to transmit messages. The website’s hosting provider processes requests needed to serve these pages. These providers have their own privacy and retention practices.</p>
      <h2>Consent and your choices</h2>
      <p>SMS notifications are enabled only at the owner’s request for the configured phone number. Consent is optional and is not a condition of purchase. Message and data rates may apply. Reply STOP to unsubscribe, or disable SMS in Friday Agent’s local configuration. A phone-number allowlist controls access to the assistant; it does not replace SMS consent.</p>
      <h2>Retention and security</h2>
      <p>Notification configuration and delivery records are stored locally while needed to operate and troubleshoot the service, or until deleted by the owner. Incoming SMS replay-protection records are removed after seven days. Twilio and carriers may retain their own records separately. Twilio credentials are stored using Windows user-bound encryption. Access controls and rate limits reduce unauthorized use, but SMS is not an end-to-end encrypted channel.</p>
      <h2>Contact and updates</h2>
      <p>For questions, access or deletion requests, or help with notifications, email <a href="mailto:eduardo.valdo21@gmail.com">eduardo.valdo21@gmail.com</a>. Updates to this policy will be published here with a revised effective date.</p>
      <p>See the <a href="/terms/">Terms &amp; Conditions</a> for the SMS program.</p>
    </PolicyLayout>
  );
}
