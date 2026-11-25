import React, { useState } from "react";

const BOOKED_DATES = [4, 8, 14, 15, 22, 28];
const LIMITED_DATES = [7, 12, 21, 29];
const MONTH_NAMES = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default function ScheduleCalendar({ onSelectEventDate, onToast }) {
  const [currentCalDate, setCurrentCalDate] = useState(new Date(2026, 10, 1));
  const [selectedInfo, setSelectedInfo] = useState(null);

  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const changeMonth = (delta) => {
    setCurrentCalDate(new Date(year, month + delta, 1));
  };

  const handleSelectDay = (day, statusText, isoDate) => {
    if (statusText === "Penuh") {
      setSelectedInfo({
        type: "full",
        title: `Tanggal ${day} ${MONTH_NAMES[month]} ${year} Sudah Penuh`,
      });
    } else {
      onSelectEventDate(isoDate);
      setSelectedInfo({
        type: "ok",
        title: `${day} ${MONTH_NAMES[month]} ${year} (${statusText})`,
      });
      onToast(`Tanggal ${day} ${MONTH_NAMES[month]} dipilih untuk acara Anda.`);
    }
  };

  return (
    <section id="cek-jadwal" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Jadwal Kapasitas Dapur
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-sage">
              Cek Ketersediaan Tanggal Acara
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              Kami menjaga kualitas setiap pesanan dengan membatasi kuota
              produksi harian. Pilih tanggal acara Anda pada kalender untuk
              memastikan slot pengiriman masih tersedia.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 inline-block shrink-0"></span>
                <span>
                  <strong>Tersedia:</strong> Slot dapur masih terbuka luas (Min.
                  pemesanan H-2).
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3.5 h-3.5 rounded-full bg-gold inline-block shrink-0"></span>
                <span>
                  <strong>Terbatas:</strong> Tersisa 1–2 slot pengiriman saja di
                  hari tersebut.
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400 inline-block shrink-0"></span>
                <span>
                  <strong>Penuh:</strong> Kuota produksi harian sudah terisi
                  penuh.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cream border border-charcoal/10 text-sm">
              {!selectedInfo && (
                <p className="font-semibold text-sage">
                  <i className="fa-regular fa-calendar-check mr-2"></i>Klik salah
                  satu tanggal pada kalender untuk mengunci jadwal acara Anda.
                </p>
              )}
              {selectedInfo?.type === "full" && (
                <>
                  <p className="font-bold text-red-700">
                    <i className="fa-solid fa-circle-xmark mr-1.5"></i>
                    {selectedInfo.title}
                  </p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    Kapasitas dapur Ibu Sri Rahayu sudah maksimal pada tanggal
                    ini. Silakan pilih tanggal lain yang bertanda hijau atau
                    emas.
                  </p>
                </>
              )}
              {selectedInfo?.type === "ok" && (
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold text-sage">
                      <i className="fa-solid fa-circle-check mr-1.5 text-emerald-600"></i>
                      {selectedInfo.title}
                    </p>
                    <p className="text-xs text-charcoal/75 mt-1">
                      Tanggal otomatis tersimpan ke formulir checkout Anda.
                    </p>
                  </div>
                  <a
                    href="#katalog"
                    className="shrink-0 px-3.5 py-2 rounded-full bg-sage text-ivory text-xs font-semibold hover:bg-sage-light"
                  >
                    Pilih Paket
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Calendar Widget */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-charcoal/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif-editorial text-2xl font-bold text-sage">
                {MONTH_NAMES[month]} {year}
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  className="w-9 h-9 rounded-full border border-charcoal/15 hover:bg-cream flex items-center justify-center text-charcoal transition-colors"
                  aria-label="Bulan Sebelumnya"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  className="w-9 h-9 rounded-full border border-charcoal/15 hover:bg-cream flex items-center justify-center text-charcoal transition-colors"
                  aria-label="Bulan Berikutnya"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-charcoal/50 uppercase mb-3">
              <div>Min</div>
              <div>Sen</div>
              <div>Sel</div>
              <div>Rab</div>
              <div>Kam</div>
              <div>Jum</div>
              <div>Sab</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDay }).map((_, idx) => (
                <div key={`empty-${idx}`}></div>
              ))}

              {Array.from({ length: daysInMonth }, (_, idx) => idx + 1).map(
                (day) => {
                  let statusClass =
                    "bg-white text-charcoal border-charcoal/10 hover:border-sage hover:bg-sage-pale/40";
                  let dotColor = "bg-emerald-600";
                  let statusText = "Tersedia";

                  if (BOOKED_DATES.includes(day)) {
                    statusClass =
                      "bg-red-50/70 text-red-700/75 border-red-200 cursor-not-allowed";
                    dotColor = "bg-red-400";
                    statusText = "Penuh";
                  } else if (LIMITED_DATES.includes(day)) {
                    statusClass =
                      "bg-gold-light/60 text-charcoal border-gold/40 hover:border-gold";
                    dotColor = "bg-gold";
                    statusText = "Terbatas";
                  }

                  const isoDate = `${year}-${String(month + 1).padStart(
                    2,
                    "0"
                  )}-${String(day).padStart(2, "0")}`;

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleSelectDay(day, statusText, isoDate)}
                      className={`p-2 sm:p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${statusClass}`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-sm sm:text-base font-bold">
                          {day}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${dotColor}`}
                        ></span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-medium mt-0.5">
                        {statusText}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}