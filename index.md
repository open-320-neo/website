---
title: Willkommen
---

# Willkommen beim Projekt Open 320 Neo

Wir freuen uns sehr das ihr den Weg hierher gefunden haben!

Wir probieren ein Flugsimulator selber zu bauen und sind zurzeit Aktiv daran. Wenn du auch einen Flugsimulator bauen möchtest, kannst du gerne unsere Arbeit kopieren, bitte beachte das wir unter der Lizenz CC-BY-SA-4.0 (oder mit Mobiflight unter der Lizenz GPL-3.0) Arbeiten und du uns erwähnen musst wenn du unser Projekt weiterarbeitest und die gleiche Lizenz verwendest.

Falls du weiter Interessiert bist und mehr erfahren möchtest, schreibe gerne eine E-Mail an diese Adresse: open320neo@justsomeone.ch

Hier haben wir die Neusten Posts:

  {% for page in site.pages %}
    {% if page.path contains 'post/' %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}