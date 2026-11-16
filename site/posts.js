// Inselwinter – Reisedaten und Beiträge.
// Neuester Beitrag wird automatisch oben angezeigt.
// "fix: true" = feststehendes Datum, sonst "ca."
window.TRIP = {
  end: "2027-04-05", // Rückkehr (Platzhalter)
  stops: [
    { name: "Ulm",           date: "2026-12-27",            at: [9.99, 48.40] },
    { name: "Euronat",       date: "2026-12-28",            at: [-1.16, 45.40], via: [[4.8, 45.76]], note: "Silvester" },
    { name: "Cádiz",         date: "2027-01-02", fix: true, at: [-6.29, 36.53], via: [[-3.7, 40.4]], note: "Fähre nach Teneriffa" },
    { name: "Teneriffa",     date: "2027-01-04",            at: [-16.55, 28.30], ferry: true, via: [[-9.6, 33.6]] },
    { name: "Gran Canaria",  date: "2027-01-15",            at: [-15.60, 27.96], ferry: true },
    { name: "Fuerteventura", date: "2027-02-01",            at: [-14.02, 28.40], ferry: true },
    { name: "Lanzarote",     date: "2027-03-02",            at: [-13.66, 29.04], ferry: true }
  ]
};

window.POSTS = [
  {
    id: "bald-gehts-los",
    date: "2026-11-16",
    place: "Ulm",
    title: "Bald geht's los",
    text: [
      "Hallo ihr Lieben! Wie die meisten von euch wissen, tauschen wir diesen Winter den Ulmer Nebel gegen Sonne, Wind und Atlantik: Drei Monate sind wir mit dem Van auf den Kanaren unterwegs. Und weil wir euch gern ein bisschen mitnehmen wollen, gibt es diese kleine Seite.",
      "Auf Instagram bekommt ihr ja schon einiges mit. Hier wird es etwas ausführlicher und persönlicher: wo wir gerade stehen, was wir erleben, wie sich das Leben im Van anfühlt und wie das eigentlich so funktioniert, drei Monate auf den Kanaren mit Arbeiten, Surfen und allem, was dazugehört.",

      { h: "So funktioniert die Seite" },
      "Ganz oben seht ihr die Karte. Der rote Punkt zeigt, wo wir gerade sind, die schwarzen Zahlen sind unsere Berichte. Klickt auf eine Zahl, und ihr landet direkt beim passenden Bericht. Der neueste steht immer ganz oben. Sobald ein neuer dazukommt, sagen wir im WhatsApp-Kanal Bescheid, ihr müsst also nichts verpassen.",

      { h: "Der Plan" },
      "Wenn alles klappt, rollen wir am 27. Dezember in Ulm los. Erster Stopp ist Euronat an der französischen Atlantikküste: Pinienwald, Dünen, Meer. Dort feiern wir Silvester mit Moritz' Eltern, bevor es richtig losgeht.",
      { imgs: [ { src: "img/euronat.jpg", alt: "Holzhaus zwischen hohen Pinien in Euronat" } ] },
      "Danach geht es quer durch Spanien runter nach Cádiz. Am 2. Januar rollen wir dort auf die Fähre, und dann heißt es erstmal: rund 38 Stunden auf dem Wasser. Ankunft auf Teneriffa, und die Kanaren können kommen. Grob geplant ist danach Gran Canaria ab Mitte Januar, Fuerteventura ab Februar und Lanzarote ab März. Zwischen den letzten beiden werden wir wahrscheinlich öfter hin und her pendeln, mal schauen, wohin uns Wind und Wellen ziehen.",

      { h: "Unser Zuhause auf Rädern" },
      "Unterwegs sind wir mit einem Sunlight T66. Mit dem waren wir letztes Jahr schon über Silvester auf Sardinien, und spätestens da war klar: Für so eine Reise ist er eigentlich perfekt.",
      { imgs: [
        { src: "img/van-meer.jpg", alt: "Der Van vor dem Meer, zwischen Büschen" },
        { src: "img/van-klippe.jpg", alt: "Der Van an einer Klippe über dem Meer, von oben" },
        { src: "img/van-kueste.jpg", alt: "Der Van auf einer grünen Steilküste im Abendlicht" }
      ], layout: "lead" },
      "Mit genau sieben Metern ist er groß genug, dass man sich auch über drei Monate nicht auf die Füße tritt, und klein genug, dass er noch auf jeden Stellplatz und jede enge Inselstraße passt. Unser Lieblingsplatz ist vorne die große Sitzgruppe. Die Fahrersitze lassen sich umdrehen, und so haben zwei Leute ganz entspannt Platz zum Arbeiten, Essen oder einfach Rausschauen.",
      "Hinten wird geschlafen, dazwischen gibt es eine kleine Küche und ein Bad mit Dusche. Mehr braucht es eigentlich nicht.",
      { imgs: [
        { src: "img/van-sitzgruppe.jpg", alt: "Sitzgruppe mit Tisch und umgedrehtem Fahrersitz unter dem Dachfenster" },
        { src: "img/van-kueche.jpg", alt: "Die Küche im Van mit warmem Licht" },
        { src: "img/van-tuer.jpg", alt: "Blick durch die offene Tür in den Van, mit Bildern und Pflanzen" },
        { src: "img/van-bad.jpg", alt: "Moritz macht ein Spiegel-Selfie im Bad des Vans" },
        { src: "img/van-bett.jpg", alt: "Die Betten im hinteren Teil des Vans" }
      ] },

      { h: "Arbeiten unterwegs" },
      "Ganz Urlaub ist es nämlich nicht: Lena arbeitet auf den Kanaren zu 80 Prozent, und auch bei Moritz läuft einiges weiter. Wir sind selbst gespannt, wie sich das einpendelt, mit Videocalls am Vormittag und Surfen am Nachmittag, so zumindest der Plan.",
      "Die große Frage ist natürlich das Internet. Auf Fuerteventura und Lanzarote war es bei uns bisher meistens gut. Damit wir aber auch an abgelegenen Plätzen arbeiten können, haben wir ein Reise-Starlink dabei. Wie gut das funktioniert, erzählen wir euch dann von unterwegs.",

      { h: "Fragt uns was" },
      "Ihr wollt etwas wissen: zum Van, zur Fähre, zum Arbeiten unterwegs, zu den Inseln oder zu was auch immer? Schreibt uns einfach per WhatsApp. Eure Fragen sammeln wir und beantworten sie in den nächsten Berichten.",
      "Wir freuen uns riesig, dass ihr mitlest. Bis bald, Lena & Moritz"
    ]
  }
];
