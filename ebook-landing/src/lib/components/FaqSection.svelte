<script>
  import { FaqItem, Button } from "$components";
  import twitterIcon from "$assets/icons/twitter.webp";

  const faqs = [
    {
      question: "What will I learn from this ebook?",
      answer:
        "This ebook will guide you through the visa process, residency requirements, and tax implications of living in Spain.",
    },
    {
      question: "Who is this ebook for?",
      answer:
        "This ebook is for anyone who is considering moving to Spain, whether for work, retirement, or other reasons.",
    },
    {
      question: "How long is the ebook?",
      answer: "The ebook is 100 pages long.",
    },
    {
      question: "How much does the ebook cost?",
      answer: "The ebook is $10.",
    },
    {
      question: "How do I buy the ebook?",
      answer: "You can buy the ebook on the website.",
    },
  ];

  let questionCurrentlyExpanded = $state(-1);

  function onclick(index) {
    if (questionCurrentlyExpanded === index) {
      questionCurrentlyExpanded = -1;
      return;
    }

    questionCurrentlyExpanded = index;
  }
</script>

<section class="faq-section">
  <h2 class="mb-l">Frequently Asked Questions</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem
        {faq}
        isExpanded={questionCurrentlyExpanded === index}
        onclick={() => onclick(index)}
      />
    {/each}
  </div>
  <div class="additional-info mt-m">
    <Button class="mt-s">Buy Now</Button>
    <p class="mt-m">Any other questions?</p>
    <a href="https://x.com/sss">
      <p>Hit me up on Twitter</p>
      <img src={twitterIcon} alt="Twitter" class="twitter-icon" />
    </a>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
