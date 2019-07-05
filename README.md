# Socionics archetypes

An interactive tool for learning socionics archetype properties and typing by them.

![Sociotipu diagramma](/doc/en-horiz.png)

![Sociotipu diagramma](/doc/en-vertik.png)

1. You can see the four base dichotomies of each sociotype visually;
2. the sociotypes are grouped by quadras;
3. see which sociotypes have a specific property;
4. select multiple properties – useful in typing;
5. select a sociotype and see:
   1. its relationships with others;
   2. its dichotomies or properties;
   3. its information element distribution in model A;
6. the configuration allows you to
   1. switch the introverts and extraverts places;
   2. choose another language;
7. you can add the page to smartphone's Home Screen, so the diagram is easily available.

## Demo

Try demo at [https://janise.github.io/socionics-archetypes](https://janise.github.io/socionics-archetypes).

Video: https://youtu.be/E6FjT4ITNPE

## Development

Compile LESS independently:

```
npm run watch-css
```

Compile React independently:

```
npm start
```

Generate `relationships.less`:
```
node src/generate_relationships.js > src/relationships.less
```

### To-Do

* Changing the URL + [Enter] does not update the App.
* History back does not work.

# Cilvēku tipi socionikā

Tipotāju palīgs socionikas apgūšanā un tipošanā.

![Sociotipu diagramma](/doc/lv-horiz.png)

![Sociotipu diagramma](/doc/lv-vertik.png)

1. Tipu attēlojums ar vizuāli izšķiramām četrām pamatpazīmēm un kvadrām;
2. apskaties, kuri tipi atbilst konkrētai pazīmei;
3. kombinē vairākas pazīmes – noderīgi tipošanā;
4. izvēlies vienu tipu, kuram parādīt
   1. attiecības ar pārējiem;
   2. atbilstošās pazīmes;
   3. funkcijas psihes modelī A;
5. konfigurācijā
   1. apmaini introvertus vietām ar ekstravertiem;
   2. izvēlies valodu (latviešu, angļu, krievu);
6. viedtālrunī pievieno sākuma ekrānam, lai rīks būtu ērti un ātri pieejams.

Izmēģini: [https://janise.github.io/socionics-archetypes](https://janise.github.io/socionics-archetypes).

Video demonstrācija: https://youtu.be/WtD4I8y_Opg
