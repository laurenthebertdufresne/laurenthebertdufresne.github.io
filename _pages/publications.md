---
layout: page
title: Publications
permalink: /publications/
weight: 2
---

<details>
    <summary>Available drafts</summary>
    {% capture publications_include %}{% include available-drafts.md %}{% endcapture %}
    {{ publications_include | markdownify }}
</details>
<details>
    <summary>Peer-reviewed articles</summary>
    {% capture publications_include %}{% include peer-reviewed.md %}{% endcapture %}
    {{ publications_include | markdownify }}
</details>
<details>
    <summary>Other edited works</summary>
    {% capture publications_include %}{% include in-peer-reviewed.md %}{% endcapture %}
    {{ publications_include | markdownify }}
</details>
