<template>
  <div class="type-writer">
    <pre id="typewriter" ref="typewriter">
      <span class="text" v-for="(t, i) in dataTexts" :key="i">{{t}}</span> 
    </pre>
  </div>
</template>

<script>
export default {
  name: "TypeWriter",
  props: {
    dataTexts: Array,
  },
  data() {
    return {}
  },
  mounted() {
    this.setupTypewriter(this.$refs.typewriter).type();
  },
  methods: {
    setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function () {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("div");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      return {
        type: type,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.var-highlight {
  color: #c0ad60;
}

.string-highlight {
  color: rgba(253, 149, 90, 0.8);
}

#typewriter {
  font-size: 2em;
  margin: 0;
  font-family: "Courier New";
  white-space: pre-line;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
