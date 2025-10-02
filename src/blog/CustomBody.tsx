import emergencias from "../data/emergencias.json";
import saludFarmacia from "../data/saludFarmacia.json";
import policia from "../data/policia.json";
import transporte from "../data/transporte.json";
import alojamiento from "../data/alojamiento.json";
import comidaBebida from "../data/comidaBebida.json";
import comidaBebidaCeliacos from "../data/comidaBebidaCeliacos.json";
import direcciones from "../data/direcciones.json";
import dineroCompras from "../data/dineroCompras.json";
import desastresNaturales from "../data/desastresNaturales.json";
import frasesCortesia from "../data/frasesCortesia.json";
import senyales from "../data/senyales.json";
import pronuncionTips from "../data/pronuncionTips.json";
import prohibiciones from "../data/prohibiciones.json";

import styles from "./CustomBody.module.css";
import { CustomCard } from "../shared/components/CustomCard";
import { CustomSubCard } from "../shared/components/CustomSubCard";
import { CustomAside } from "./CustomAside";
import { SimpleCard } from "../shared/components/SimpleCard";
import { Phone } from "../icon/phone";

export const CustomBody = () => {
  return (
    <div className='grid' id='struct'>
      <main className={styles.customMain}>
        {/* Emergencias — Prioridad */}
        <CustomCard title="Emergencias — Prioridad">
          <div className={styles.customGrid}>
            {emergencias.map((emergencia, index) => (
              <CustomSubCard
                key={emergencia.titulo + index}
                kanji={emergencia.japones}
                pronunciacion={emergencia.romaji}
                traduccion={emergencia.espanol}
              />
            ))}
          </div>
        </CustomCard>

        {/* Salud y farmacia */}
        <CustomCard title="Salud y farmacia">
          <div className={styles.customGrid}>
            {saludFarmacia.salud.frases.map((emergencia, index) => (
              <CustomSubCard
                key={emergencia.titulo + index}
                kanji={emergencia.japones}
                pronunciacion={emergencia.romaji}
                traduccion={emergencia.espanol}
              />
            ))}
          </div>
          <p className="small">
            Esto se complementará con los alérgenos y medicamentos más comunes:
          </p>
          <div className={styles.flexRow} style={{ marginTop: "0.9rem" }}>
            <CustomCard subtitle={saludFarmacia.salud.alergenos.title}>
              <ul className="small">
                {saludFarmacia.salud.alergenos.valores.map((valor) => (
                  <li
                    key={valor.kanji}
                  >{`${valor.kanji} (${valor.romaji}) — ${valor.espanol}`}</li>
                ))}
              </ul>
            </CustomCard>
            <CustomCard subtitle={saludFarmacia.salud.medicinas.title}>
              <ul className="small">
                {saludFarmacia.salud.medicinas.valores.map((valor) => (
                  <li
                    key={valor.kanji}
                  >{`${valor.kanji} (${valor.romaji}) — ${valor.espanol}`}</li>
                ))}
              </ul>
            </CustomCard>
          </div>
          <br />
          <p className="small">
            Frases específicas para celíacos en situaciones de salud y farmacia:
          </p>
          <div className={styles.customGrid} style={{ marginTop: "0.9rem" }}>
            {saludFarmacia.salud.frasesMedicasCeliaco.map((emergencia, index) => (
              <CustomSubCard
                key={emergencia.titulo + index}
                kanji={emergencia.japones}
                pronunciacion={emergencia.romaji}
                traduccion={emergencia.espanol}
              />
            ))}
          </div>
        </CustomCard>
        {/*  Policía y objetos perdidos */}
        <CustomCard title="Policía y objetos perdidos">
          <div className={styles.customGrid}>
            {policia.phrases.map((policia, index) => (
              <CustomSubCard
                key={policia.jp + index}
                kanji={policia.jp}
                pronunciacion={policia.romaji}
                traduccion={policia.es}
              />
            ))}
          </div>
        </CustomCard>
        {/* Transporte */}
        <CustomCard title="Transporte">
          <div className={styles.customGrid}>
            {transporte.phrases.map((transporte, index) => (
              <CustomSubCard
                key={transporte.jp + index}
                kanji={transporte.jp}
                pronunciacion={transporte.romaji}
                traduccion={transporte.es}
              />
            ))}
          </div>
        </CustomCard>
        {/* Alojamiento */}
        <CustomCard title="Alojamiento">
          <div className={styles.customGrid}>
            {alojamiento.phrases.map((alojamiento, index) => (
              <CustomSubCard
                key={alojamiento.jp + index}
                kanji={alojamiento.jp}
                pronunciacion={alojamiento.romaji}
                traduccion={alojamiento.es}
              />
            ))}
          </div>
        </CustomCard>
        {/* Comida y bebida */}
        <CustomCard title="Comida y bebida">
          <div className={styles.customGrid}>
            {comidaBebida.phrases.map((comidaBebida, index) => (
              <CustomSubCard
                key={comidaBebida.jp + index}
                kanji={comidaBebida.jp}
                pronunciacion={comidaBebida.romaji}
                traduccion={comidaBebida.es}
              />
            ))}
          </div>
        </CustomCard>
        <CustomCard title="Comida y bebida sin gluten (Celiacos)">
          <div className={styles.customGrid}>
            {comidaBebidaCeliacos.phrases.map((comidaBebida, index) => (
              <CustomSubCard
                key={comidaBebida.jp + index}
                kanji={comidaBebida.jp}
                pronunciacion={comidaBebida.romaji}
                traduccion={comidaBebida.es}
              />
            ))}
          </div>
            <CustomCard subtitle={saludFarmacia.salud.alergenosParaCelicaos.title}>
              <ul className="small">
                {saludFarmacia.salud.alergenosParaCelicaos.valores.map((valor) => (
                  <li
                    key={valor.kanji}
                  >{`${valor.kanji} (${valor.romaji}) — ${valor.espanol}`}</li>
                ))}
              </ul>
            </CustomCard>
        </CustomCard>
        {/* Direcciones rápidas (útiles con mapas) */}
        <CustomCard title="Direcciones rápidas (útiles con mapas)">
          <div className={styles.customGrid}>
            {direcciones.phrases.map((direcciones, index) => (
              <CustomSubCard
                key={direcciones.jp + index}
                kanji={direcciones.jp}
                pronunciacion={direcciones.romaji}
                traduccion={direcciones.es}
              />
            ))}
          </div>
        </CustomCard>
        {/* Dinero y compras */}
        <CustomCard title="Dinero y compras">
          <div className={styles.customGrid}>
            {dineroCompras.phrases.map((dineroCompras, index) => (
              <CustomSubCard
                key={dineroCompras.jp + index}
                kanji={dineroCompras.jp}
                pronunciacion={dineroCompras.romaji}
                traduccion={dineroCompras.es}
              />
            ))}
          </div>
        </CustomCard>
        {/* Desastres naturales (frases clave) */}
        <CustomCard title="Desastres naturales (frases clave)">
          <div className={styles.customGrid}>
            {desastresNaturales.phrases.map((desastresNaturales, index) => (
              <CustomSubCard
                key={desastresNaturales.jp + index}
                kanji={desastresNaturales.jp}
                pronunciacion={desastresNaturales.romaji}
                traduccion={desastresNaturales.es}
              />
            ))}
          </div>
        </CustomCard>
        {/*  Frases de cortesía y utilidades */}
        <CustomCard title="Frases de cortesía y utilidades">
          <div className={styles.customGrid}>
            {frasesCortesia.phrases.map((frasesCortesia, index) => (
              <CustomSubCard
                key={frasesCortesia.jp + index}
                kanji={frasesCortesia.jp}
                pronunciacion={frasesCortesia.romaji}
                traduccion={frasesCortesia.es}
              />
            ))}
          </div>
        </CustomCard>
        {/*  Señalética útil (lo verás en carteles) */}
        <CustomCard title="Señalética útil (lo verás en carteles)">
          <div className={styles.customGrid}>
            {senyales.signs.map((senyales, index) => (
              <CustomSubCard
                key={senyales.jp + index}
                kanji={senyales.jp}
                pronunciacion={senyales.romaji}
                traduccion={senyales.es}
              />
            ))}
          </div>
        </CustomCard>
      </main>
      <CustomAside>
        <CustomCard title="Emergencia • Farmacia • Policia">
          <SimpleCard>
            <Phone />
            <p>Policia - 110</p>
          </SimpleCard>
          <SimpleCard>
            <Phone />
            <p>Bomberos - 119</p>
          </SimpleCard>

          <hr className="dotted" />
          <p className="small">Prohibiciones habituales</p>
          {prohibiciones.prohibiciones.map((prohibiciones) => (
            <CustomCard key={prohibiciones.describtion} customStyles>
              <div className="small-icon">{prohibiciones.emoji}</div>
              <p style={{ fontSize: "14px" }}>{prohibiciones.describtion}</p>
            </CustomCard>
          ))}
        </CustomCard>
        <CustomCard subtitle="Notas de pronunciación (ultrarrápidas)">
          <ul>
            {pronuncionTips.pronunciationTips.map((pronuncionTips) => (
              <li className="small" key={pronuncionTips.tip}>
                {pronuncionTips.tip}
              </li>
            ))}
          </ul>
        </CustomCard>
      </CustomAside>
    </div>
  );
};
