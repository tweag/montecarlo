# Montecarlo Distributions for Google Sheets

> Monte Carlo methods are a broad class of computational algorithms that rely on repeated random sampling to obtain numerical results. Their essential idea is using randomness to solve problems that might be deterministic in principle.
>
> -- <cite>[Wikipedia](https://en.wikipedia.org/wiki/Monte_Carlo_method)</cite>

## Installation

1. In a Google Sheet, go to `Tools > Script Editor`.
2. Copy the contents of [`index.js`](https://github.com/promptworks/montecarlo/raw/master/index.js) into your script editor.
3. Save it.

## Usage

Imagine you have a list of ballpark estimates (in number of days).

| Feature   | Optimistic | Realistic  |
|-----------|------------|------------|
| Login     | 1          | 3          |
| Register  | 3          | 5          |
| Feature C | 1          | 3          |
| Feature D | 7          | 10         |

So, for example, we've estimated that the "Login" feature will take between 1 and 3 days.

#### Creating a distribution

You can use the `montecarlo` function to generate a distribution of random estimates that summarize our predictions above:

```
=montecarlo(B2:C5, 5000, 10)
```

In this example:

* `B2:C5` is our pairs.
* `5000` is the number of scenarios we want to generate.
* `10` is the number of significant figures.

The result will be a list of 5,000 possible scenarios for how long our project should take.

```
16.18027213
16.29580835
17.3314513
16.34084315
17.15207622
14.75260192
...
```

#### Summarizing our data

Next, we'll generate a grouped frequency from our values.

```
=groupedFrequency(montecarlo(B2:C5, 5000, 10), 3)
```

In this example, `3` is the number of bins we'd like to collect. Feel free to experiment with it.

| Days | Likelihood |
|------|------------|
| 12   | 0.1424     |
| 15   | 0.7246     |
| 18   | 0.133      |

Based on our estimates, there is a 72% chance that we'll finish the project in 15 days.
