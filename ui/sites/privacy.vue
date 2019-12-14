<template>
  <div>
    <navigation />
    <app-content>
      <ui-header>
        <h1>Things we do with your data. &nbsp; ( ͡° ͜ʖ ͡°)</h1>
      </ui-header>
      <section class="intro">
        <div class="container">
          <h2>Before you start</h2>
          <p>
            We just wanna let you know that we truly believe in your right to
            know how <b>all</b> data that we collect is being used. That's why
            we sat down and tried to explain every single point of data as
            humanly as possible - no lawyer talk!
          </p>
        </div>
      </section>
      <div class="container">
        <section>
          <h2>Meta Data</h2>
          <p>
            This data tells us <i>when</i> and <i>how</i> you interact with our
            service. We use this data exclusively to figure out how our userbase
            develops and to measure if people successfully get to where they
            wanted in a reasonable time. This helps us greatly when we try to
            determine if a feature is well-designed or needs an overhaul.
            <br>
            <br>
            To collect this type of data, we use
            <a href="https://support.google.com/analytics/answer/6004245?hl=en" target="_blank">
              Google Analytics
            </a>
            and our own analytics service which does not share data with
            anyone else.
          </p>
        </section>
        <section>
          <h2>Password Storage</h2>
          <p>
            We store all passwords using the bcrypt hash algorithm with 15 salt rounds.
            Tech talk aside - <a href="https://security.stackexchange.com/a/6415">it's pretty secure.</a>
            This means that in case of a security breach, it'll be as hard as
            possible for attackers to get your actual password. That doesn't
            mean it's <i>impossible</i> to crack the password however, so
            make sure you have a unique password with reasonable complexity.
          </p>
        </section>
        <section>
          <h2>User data</h2>
          <p>
            Any usernames, emails or other data that needs to be
            looked up on demand will have to remain stored in plaintext. So if
            we ever do a whoopsie in our database setup and data starts leaking,
            an attacker could combine this data to get some insights into who
            you are.
            <br>
            <br>
            To combat this, we heavily suggest using a unique password for your
            email account that is not shared with any other service. We also
            recommend having a look at <a href="https://haveibeenpwned.com/">
              haveibeenpwned</a> to see if your password has been leaked on
            another service.
            <br>
            <br>
            Luckily, we don't force you to register with an email address. While this
            is not recommended as it makes the password recovery process very
            difficult, it also means that nobody will track down more of your
            data in case of a security breach.
          </p>
        </section>
      </div>
      <section class="breach">
        <div class="container">
          <h2>Actions upon a security breach</h2>
          <p>
            Should somebody sneak into our systems and leak sensitive user
            information, we'll make sure to prepare an announcement within 7 days
            after the issue has been resolved.
            <br>
            <br>
            If this ever happens, there's no need to freak out. No passwords will be leaked,
            and we'll provide detailed instructions on how to avoid further
            issues depending on the situation.
          </p>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import uiHeader from 'src/components/ui/header.vue'

export default {
  components: {
    navigation,
    appContent,
    uiHeader
  },

  head: {
    title: 'NexusHub · Privacy Policy',
    meta: meta({
      title: 'NexusHub Privacy Policy',
      description: 'Things we do with your data. ( ͡° ͜ʖ ͡°)'
    })
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.intro {
  border-bottom: 1px solid $color-subtle-dark;
}
.breach {
  border-top: 1px solid $color-subtle-dark;
}
a {
  margin-top: 15px;
}
</style>
