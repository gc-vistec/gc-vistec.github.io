<template>
  <section id="key-dates">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mx-auto text-center">
            <h2>KEY DATES</h2>
          </div>
        </div>
      </div>
      <!-- All cards must be the same height and width for space calculations on large screens. -->
      <div class="demo-card-wrapper">
        <div class="demo-card demo-card--step1">
          <div class="head">
            <div class="number-box">
              <span>18 Nov</span>
            </div>
            <h2><span class="small">Undergrad thesis</span>submission deadline</h2>
          </div>
          <div class="body">
            <div class="holder"></div>
          </div>
        </div>

        <div class="demo-card demo-card--step2">
          <div class="head">
            <div class="number-box">
              <span>25 Nov</span>
            </div>
            <h2><span class="small">Thesis</span>authors notification</h2>
          </div>
          <div class="body">
            <div class="holder"></div>
          </div>
        </div>

        <div class="demo-card demo-card--step3">
          <div class="head">
            <div class="number-box">
              <span>13 Dec</span>
            </div>
            <h2><span class="small">Deadline for</span>registration</h2>
          </div>
          <div class="body">
            <div class="holder"></div>
          </div>
        </div>

        <div class="demo-card demo-card--step4">
          <div class="head">
            <div class="number-box">
              <span>20 Dec</span>
            </div>
              <h2><span class="small">Gather for the</span>Symposium Day</h2>
          </div>
          <div class="body">
            <div class="holder"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>

/* Media Queries */
@mixin mq-xs {
  @media (min-width: 320px) {
    @content;
  }
}

@mixin mq-sm {
  @media (min-width: 480px) {
    @content;
  }
}

@mixin mq-md {
  @media (min-width: 720px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 1170px) {
    @content;
  }
}

$background: #f7f7f7;
$box-shadow: 0 0 40px -6px rgba(0,0,0,0.75);
$border: 1px solid rgba(191, 191, 191, 0.4);
$items: 5;
$rows: ceil($items/2);

/* Card sizing */
$card-height: 85px;
$card-width: 450px;
$inner-margin: 15px;
$number-size: 35px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */
$steps: #4A2C79;
$colors: rgb(88, 46, 145), rgb(160, 34, 58), rgb(248, 186, 0);
$timeline: #bdbdbd;

/* Calculations */
$container-height: $rows * ($card-height + $outer-margin);
$container-width: $card-width*2 + $outer-margin*3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */
@include mq-lg {
  %arrow {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
  %marker {
    position: absolute;
    content: "";
    width: $marker-size;
    height: $marker-size;
    background-color: $timeline;
    border-radius: $marker-size;
    box-shadow: 0px 0px 2px 8px $background;
  }
}

$counter: $items - $rows + 2;
@for $i from 1 through $rows {
  .demo-card:nth-child(#{$i*2-1})   { order: $i }
  .demo-card:nth-child(#{$i*2})     { order: $counter }
  $counter: $counter + 1;
}

#key-dates {
  padding-top: 100px;
  padding-bottom: 30px;

  .holder {
    height: 500px;
    width: 1000px;
  }

  small {
    font-weight: 400 !important;
  }

  .demo-card-wrapper {
    position: relative;
    margin: auto;

    h2 {
      font-size: larger !important;
      font-weight: 700 !important;
    }

    @include mq-lg {
      display: flex;
      flex-flow: column wrap;
      width: $container-width;
      height: $container-height;
      margin: 0 auto;
    }

    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: $border;
      @include mq-lg {
        border-left: 1px solid $timeline;
      }
    }
  }

  .demo-card:last-child {
    margin-bottom: 10px !important;
  }

  .demo-card {
    position: relative;
    display: block;
    margin: 10px auto 50px;
    max-width: 94%;
    z-index: 2;

    @include mq-sm {
      max-width: 60%;
      box-shadow: $box-shadow;
    }

    @include mq-md {
      max-width: 40%;
    }

    @include mq-lg {
      max-width: $card-width;
      height: $card-height;
      margin: $outer-margin;
      margin-top: $outer-margin/2;
      margin-bottom: $outer-margin/2;

      &:nth-child(odd) {
        margin-right: $outer-margin/2;

        .head::after {
          @extend %arrow;
          border-left-width: 15px;
          border-left-style: solid;
          left: 100%;
        }

        .head::before {
          @extend %marker;
          left: $marker-dist + 1;
        }
      }

      &:nth-child(even) {
        margin-left: $outer-margin/2;

        .head::after {
          @extend %arrow;
          border-right-width: 15px;
          border-right-style: solid;
          right: 100%;
        }

        .head::before {
          @extend %marker;
          right: $marker-dist - 1;
        }
      }

      &:nth-child(2) {
        margin-top: $stagger;
      }
    }


    .head {
      position: relative;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 1);
      font-weight: 400;

      .number-box {
        display: inline;
        margin: $inner-margin;
        padding: 10px;
        font-size: $number-size;
        line-height: $number-size;
        font-weight: 600;
        background: rgba(0, 0, 0, 0.2);
      }

      h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: inherit;
        letter-spacing: 2px;
        margin: 0;
        padding-bottom: 6px;
        line-height: 1rem;

        @include mq-sm {
          font-size: 165%;
          line-height: 1.2rem;
        }

        span {
          display: block;
          font-size: 0.6rem;
          margin: 0;

          @include mq-sm {
            font-size: 0.8rem;
          }
        }
      }
    }
    .body {
      background: #fff;
      background-attachment: fixed;
      border: $border;
      border-top: 0;
      height: 0px;
      padding: $inner-margin;
      visibility: hidden;
      overflow: hidden;

      @include mq-lg {
        height: $body-height;
      }

      p {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: $inner-margin;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    @for $i from 1 through $items {
      &--step#{$i} {
        $color: nth($colors, ((($i - 1) % 3) + 1));
        background-color: $color;

        .head::after {
          border-color: $color;
        }
      }
    }
  }
}
</style>

