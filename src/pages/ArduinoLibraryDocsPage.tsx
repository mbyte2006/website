import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft, Download, Info, Package, Settings, Cpu, Terminal,
  Wifi, RefreshCw, BookOpen, Wrench, History, AlertTriangle,
} from 'lucide-react';
import Footer from '../components/Footer';

type SectionId =
  | 'overview' | 'installation' | 'settings' | 'pins' | 'quickstart'
  | 'firstboot' | 'wifi' | 'api' | 'troubleshooting' | 'changelog';

const SECTIONS: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: 'overview',        label: 'Overview',             icon: <Info className="w-3.5 h-3.5" /> },
  { id: 'installation',    label: 'Installation',         icon: <Package className="w-3.5 h-3.5" /> },
  { id: 'settings',        label: 'IDE Settings',         icon: <Settings className="w-3.5 h-3.5" /> },
  { id: 'pins',            label: 'Pin Diagram',          icon: <Cpu className="w-3.5 h-3.5" /> },
  { id: 'quickstart',      label: 'Quick Start',          icon: <Terminal className="w-3.5 h-3.5" /> },
  { id: 'firstboot',       label: 'First Boot Setup',     icon: <Wifi className="w-3.5 h-3.5" /> },
  { id: 'wifi',            label: 'Changing WiFi / ID',   icon: <RefreshCw className="w-3.5 h-3.5" /> },
  { id: 'api',             label: 'API Reference',        icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'troubleshooting', label: 'Troubleshooting',      icon: <Wrench className="w-3.5 h-3.5" /> },
  { id: 'changelog',       label: 'Changelog',            icon: <History className="w-3.5 h-3.5" /> },
];

const DOWNLOAD_URL = 'https://github.com/mbyte2026/mbyte_audio_robot/releases/download/v1.0.0/mbyte_audio_robot-v1.0.0.zip';

export default function ArduinoLibraryDocsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Page header */}
      <div className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(139,92,246,0.09)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Documentation
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase">
              Hardware Guide
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs font-mono">
              Arduino Library — latest (v1.0.0)
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            mbyte_audio_robot
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mb-8">
            Turn any ESP32-S3 board into a voice AI robot connected to the MByte cloud — wake-word
            detection, audio streaming, and playback in one library.
          </p>

          <a
            href={DOWNLOAD_URL}
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm tracking-wide bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-shadow duration-300"
          >
            <Download className="w-4 h-4" />
            Download Library (.zip)
          </a>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar — desktop */}
          <aside className="hidden md:flex flex-col gap-1 w-56 shrink-0 pt-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 px-3 mb-2">
              On this page
            </p>
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all duration-200 ${
                  activeSection === s.id
                    ? 'bg-white/[0.08] text-white border-l-2 border-violet-500 pl-[10px]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04] border-l-2 border-transparent pl-[10px]'
                }`}
              >
                <span className={activeSection === s.id ? 'text-violet-400' : 'text-white/25'}>
                  {s.icon}
                </span>
                {s.label}
              </button>
            ))}
          </aside>

          {/* Mobile tab strip */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeSection === s.id
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'bg-white/[0.04] text-white/40 border border-white/[0.07] hover:text-white/70'
                }`}
              >
                {s.icon}
                {s.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1 min-w-0"
          >
            {activeSection === 'overview' && <OverviewSection />}
            {activeSection === 'installation' && <InstallationSection />}
            {activeSection === 'settings' && <SettingsSection />}
            {activeSection === 'pins' && <PinsSection />}
            {activeSection === 'quickstart' && <QuickStartSection />}
            {activeSection === 'firstboot' && <FirstBootSection />}
            {activeSection === 'wifi' && <WifiSection />}
            {activeSection === 'api' && <ApiSection />}
            {activeSection === 'troubleshooting' && <TroubleshootingSection />}
            {activeSection === 'changelog' && <ChangelogSection />}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Shared bits ────────────────────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mb-5">{children}</h2>;
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.06] p-5 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-amber-400 font-bold text-sm uppercase tracking-wide">{title}</span>
      </div>
      <div className="text-amber-200/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function CodeWindowChrome({ filename, lang }: { filename: string; lang: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
      <span className="w-3 h-3 rounded-full bg-red-500/50" />
      <span className="w-3 h-3 rounded-full bg-amber-500/50" />
      <span className="w-3 h-3 rounded-full bg-green-500/50" />
      <span className="ml-3 text-xs text-white/30 font-mono tracking-wide">{filename}</span>
      <span className="ml-auto text-[10px] text-white/20 font-mono uppercase tracking-widest">{lang}</span>
    </div>
  );
}

/* ─── 1. Overview ────────────────────────────────────────────────────────── */

function OverviewSection() {
  return (
    <div>
      <SectionHeading>Overview</SectionHeading>
      <p className="text-white/60 text-base leading-[1.85] max-w-2xl">
        <code className="text-violet-300 font-mono text-sm">mbyte_audio_robot</code> turns any
        ESP32-S3 board into a voice AI robot that connects to the MByte cloud AI service over
        WebSocket. The library handles microphone capture, wake-word detection, Opus audio
        encode/decode, and speaker playback — so your sketch only needs a few lines to bring a
        robot to life.
      </p>
    </div>
  );
}

/* ─── 2. Installation ────────────────────────────────────────────────────── */

function InstallationSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Installation</SectionHeading>
      <ol className="flex flex-col gap-4 max-w-2xl">
        <li className="flex gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center">1</span>
          <p className="text-white/60 text-sm leading-relaxed pt-1">
            Copy the library folder into Arduino's libraries directory:{' '}
            <code className="text-violet-300 font-mono text-xs bg-white/[0.05] px-1.5 py-0.5 rounded">
              Documents/Arduino/libraries/mbyte_audio_robot
            </code>
            , or use <span className="text-white/80">Sketch &gt; Include Library &gt; Add .ZIP Library</span> and
            select the downloaded zip directly.
          </p>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center">2</span>
          <p className="text-white/60 text-sm leading-relaxed pt-1">
            Restart Arduino IDE after installing so it picks up the new library.
          </p>
        </li>
      </ol>
    </div>
  );
}

/* ─── 3. Required Arduino IDE Settings ───────────────────────────────────── */

function SettingsSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Required Arduino IDE Settings</SectionHeading>
      <Callout title="Read this before compiling — #1 cause of build failures">
        Skipping the Partition Scheme setting below is the most common reason this library fails
        to compile. Set it correctly first.
      </Callout>

      <div className="flex flex-col gap-3 max-w-2xl">
        <SettingRow label="Tools > Board" value={'"ESP32S3 Dev Module"'} />
        <SettingRow
          label="Tools > Partition Scheme"
          value={'"Huge APP (3MB No OTA/1MB SPIFFS)"'}
          required
          note='The default partition scheme only allows ~1.25MB for the app and this library needs more. Using the default causes a "Sketch too big / text section exceeds available space" compile error.'
        />
        <SettingRow label="Tools > Flash Size" value="Match your board's actual flash (commonly 4MB or 8MB)" />
        <SettingRow label="Tools > PSRAM" value="Enable if supported (recommended for audio buffers)" />
        <SettingRow label="Tools > Core Debug Level" value='"None" recommended (smaller binary)' />
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 max-w-2xl">
        <p className="text-white/50 text-sm leading-relaxed">
          <span className="text-white/80 font-semibold">Note:</span> you may see a warning{' '}
          <code className="text-white/40 font-mono text-xs">
            "library claims to run on esp32s3 architecture(s) and may be incompatible with esp32"
          </code>{' '}
          — this is a harmless false positive and can be ignored.
        </p>
      </div>
    </div>
  );
}

function SettingRow({
  label, value, required, note,
}: { label: string; value: string; required?: boolean; note?: string }) {
  return (
    <div className={`rounded-xl border p-5 flex flex-col gap-2 ${
      required ? 'border-amber-500/25 bg-amber-500/[0.06]' : 'border-white/[0.08] bg-white/[0.03]'
    }`}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-white/40 text-xs font-mono uppercase tracking-wide">{label}</span>
        {required && (
          <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
            Required
          </span>
        )}
      </div>
      <span className={`font-mono text-sm ${required ? 'text-amber-300' : 'text-white/80'}`}>{value}</span>
      {note && <p className="text-white/40 text-xs leading-relaxed mt-1">{note}</p>}
    </div>
  );
}

/* ─── 4. Pin Diagram ─────────────────────────────────────────────────────── */

function PinsSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading>Pin Diagram</SectionHeading>
      <p className="text-white/40 text-sm max-w-2xl -mt-2 mb-1">
        Default wiring shown below — every pin is overridable in code via{' '}
        <code className="text-violet-300 font-mono text-xs">setMicPin()</code> and{' '}
        <code className="text-violet-300 font-mono text-xs">setSpeakerPin()</code>.
      </p>

      {/* Wiring diagram images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {[
          { src: '/wiring_diagram2.jpeg', label: 'Wiring Diagram' },
          { src: '/ELECTRIC_circuit.png', label: 'Circuit Diagram' },
        ].map(({ src, label }) => (
          <div key={src} className="rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
            <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
              <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">{label}</span>
            </div>
            <img src={src} alt={label} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>

      {/* Pin tables */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
        <PinTable
          title="Microphone (I2S, e.g. INMP441)"
          rows={[
            { label: 'Mic SCK',  pin: 'GPIO 6' },
            { label: 'Mic WS',   pin: 'GPIO 5' },
            { label: 'Mic SD',   pin: 'GPIO 4' },
            { label: 'Mic L/R',  pin: 'GND' },
            { label: 'Mic GND',  pin: 'GND' },
            { label: 'Mic VDD',  pin: '3.3V' },
          ]}
        />
        <PinTable
          title="Speaker amp (I2S, e.g. MAX98357A)"
          rows={[
            { label: 'Speaker BCLK', pin: 'GPIO 12' },
            { label: 'Speaker LRC',  pin: 'GPIO 13' },
            { label: 'Speaker DIN',  pin: 'GPIO 11' },
            { label: 'Speaker GAIN', pin: '3.3V' },
            { label: 'Speaker SD',   pin: '---' },
            { label: 'Speaker GND',  pin: 'GND' },
            { label: 'Speaker VIN',  pin: '3.3V' },
          ]}
        />
      </div>
    </div>
  );
}

function pinValueColor(pin: string): string {
  if (pin.startsWith('GPIO')) return 'text-violet-300 font-semibold';
  if (pin === 'GND')  return 'text-red-400 font-semibold';
  if (pin === '3.3V') return 'text-emerald-400 font-semibold';
  return 'text-white/25';
}

function PinTable({ title, rows }: { title: string; rows: { label: string; pin: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
      <div className="px-5 py-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="text-sm font-bold text-violet-400">{title}</span>
      </div>
      <div className="divide-y divide-white/[0.06]">
        {rows.map(r => (
          <div key={r.label} className="grid grid-cols-2 px-5 py-3 text-sm font-mono">
            <span className="text-white/60">{r.label}</span>
            <span className={pinValueColor(r.pin)}>{r.pin}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 5. Quick Start ─────────────────────────────────────────────────────── */

function QuickStartSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <SectionHeading>Quick Start</SectionHeading>
        <p className="text-white/40 text-sm max-w-2xl -mt-2">
          Uses the setup portal for WiFi and Device ID — see{' '}
          <span className="text-white/70">First Boot Setup</span>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c0c] max-w-2xl">
          <CodeWindowChrome filename="mbyte_audio_robot.ino" lang="Arduino C++" />
          <div className="p-6 font-mono text-sm flex flex-col gap-[3px]">
            <span className="text-violet-400/80">{'#include <mbyte_audio_robot.h>'}</span>
            <span>&nbsp;</span>
            <span><span className="text-blue-400/80">void</span> <span className="text-white/80">setup</span>() {'{'}</span>
            <span className="pl-4 text-white/70">Serial.begin(115200);</span>
            <span className="pl-4 text-white/70">mbyte.setMicSens(1);</span>
            <span className="pl-4 text-white/70">mbyte.begin();</span>
            <span>{'}'}</span>
            <span>&nbsp;</span>
            <span><span className="text-blue-400/80">void</span> <span className="text-white/80">loop</span>() {'{'}</span>
            <span className="pl-4 text-white/70">mbyte.run();</span>
            <span>{'}'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-bold text-white">Alternative: Hardcoded WiFi &amp; Device ID</h3>
        <p className="text-white/40 text-sm max-w-2xl -mt-2">
          Skips the setup portal entirely by connecting to WiFi and passing the Device ID directly
          in code. Useful for quick bench testing, but credentials are baked into the binary.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c0c] max-w-2xl">
          <CodeWindowChrome filename="mbyte_audio_robot.ino" lang="Arduino C++" />
          <div className="p-6 font-mono text-sm flex flex-col gap-[3px] overflow-x-auto">
            <span className="text-violet-400/80">{'#include <WiFi.h>'}</span>
            <span className="text-violet-400/80">{'#include <mbyte_audio_robot.h>'}</span>
            <span>&nbsp;</span>
            <span><span className="text-blue-400/80">const</span> <span className="text-blue-400/80">char*</span> <span className="text-white/80">WIFI_SSID</span> = <span className="text-emerald-400/70">"YOUR_WIFI"</span>;</span>
            <span><span className="text-blue-400/80">const</span> <span className="text-blue-400/80">char*</span> <span className="text-white/80">WIFI_PASSWORD</span> = <span className="text-emerald-400/70">"YOUR_PASSWORD"</span>;</span>
            <span><span className="text-blue-400/80">const</span> <span className="text-blue-400/80">char*</span> <span className="text-white/80">DEVICE_ID</span> = <span className="text-emerald-400/70">"YOUR_DEVICE_ID"</span>;</span>
            <span>&nbsp;</span>
            <span><span className="text-blue-400/80">void</span> <span className="text-white/80">setup</span>() {'{'}</span>
            <span className="pl-4 text-white/70">Serial.begin(115200);</span>
            <span className="pl-4 text-white/0">&nbsp;</span>
            <span className="pl-4 text-white/30">{'// Connect to WiFi'}</span>
            <span className="pl-4 text-white/70">WiFi.begin(WIFI_SSID, WIFI_PASSWORD);</span>
            <span className="pl-4 text-white/70"><span className="text-blue-400/80">while</span> (WiFi.status() != WL_CONNECTED) {'{'}</span>
            <span className="pl-8 text-white/70">delay(500);</span>
            <span className="pl-4 text-white/70">{'}'}</span>
            <span className="pl-4 text-white/0">&nbsp;</span>
            <span className="pl-4 text-white/30">{'// Audio Robot settings'}</span>
            <span className="pl-4 text-white/70">mbyte.setMicSens(1);</span>
            <span className="pl-4 text-white/70">mbyte.begin(DEVICE_ID);</span>
            <span>{'}'}</span>
            <span>&nbsp;</span>
            <span><span className="text-blue-400/80">void</span> <span className="text-white/80">loop</span>() {'{'}</span>
            <span className="pl-4 text-white/30">{'// Keep the audio robot running smoothly'}</span>
            <span className="pl-4 text-white/70">mbyte.run();</span>
            <span>{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 6. First Boot — WiFi & Device ID setup ─────────────────────────────── */

function FirstBootSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>First Boot — WiFi &amp; Device ID Setup</SectionHeading>
      <p className="text-white/40 text-sm max-w-2xl -mt-2 mb-1">
        No hardcoding needed — credentials are entered once through a setup portal.
      </p>
      <ol className="flex flex-col gap-4 max-w-2xl">
        {[
          'On first boot, or whenever saved WiFi credentials fail, the device starts a WiFi hotspot named "MByte-Setup-XXXX".',
          'Connect your phone to that hotspot — a setup page should pop up automatically, or visit http://192.168.4.1 manually.',
          'Enter your home WiFi SSID, password, and your MByte Device ID, then tap Save.',
          'The device reboots and connects automatically on every boot after that.',
        ].map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-white/60 text-sm leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─── 7. Changing WiFi or Device ID later ────────────────────────────────── */

function WifiSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Changing WiFi or Device ID Later</SectionHeading>
      <ol className="flex flex-col gap-4 max-w-2xl">
        {[
          'Open Serial Monitor at 115200 baud while the device is running.',
          <>Type <code className="text-violet-300 font-mono text-xs bg-white/[0.05] px-1.5 py-0.5 rounded">resetwifi</code> and press enter.</>,
          'The device clears the saved WiFi credentials and Device ID, then reboots back into the setup hotspot so you can enter new ones.',
        ].map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-white/60 text-sm leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─── 8. API Reference ───────────────────────────────────────────────────── */

function ApiSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading>API Reference</SectionHeading>
      <div className="flex flex-col gap-4 max-w-2xl">
        <ApiEntry
          signature="mbyte.setMicPin(gpio_num_t ws = GPIO_NUM_5, gpio_num_t sck = GPIO_NUM_6, gpio_num_t din = GPIO_NUM_4)"
          description="Override microphone I2S pins. Call before begin()."
        />
        <ApiEntry
          signature="mbyte.setSpeakerPin(gpio_num_t dout = GPIO_NUM_11, gpio_num_t bclk = GPIO_NUM_12, gpio_num_t lrck = GPIO_NUM_13)"
          description="Override speaker I2S pins. Call before begin()."
        />
        <ApiEntry
          signature="mbyte.setMicSens(int sensitivity)"
          description="Mic VAD sensitivity; 1 = normal, 0 = less sensitive. Call before begin()."
        />
        <ApiEntry
          signature="mbyte.begin(const char* deviceId = nullptr)"
          description="Starts WiFi (auto-provisioning if needed), connects to the MByte cloud service, starts the audio pipeline. deviceId is optional — only used as a one-time fallback default if no Device ID has been saved yet; normally omit it and set the Device ID via the setup portal instead."
        />
        <ApiEntry
          signature="mbyte.run()"
          description="Call once in loop(); runs the robot's main loop internally (it blocks forever, so loop() only ever needs this one call)."
        />
      </div>
    </div>
  );
}

function ApiEntry({ signature, description }: { signature: string; description: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col gap-2">
      <code className="text-sm font-mono text-violet-300 break-all leading-relaxed">{signature}</code>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── 9. Troubleshooting ─────────────────────────────────────────────────── */

function TroubleshootingSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading>Troubleshooting</SectionHeading>
      <div className="flex flex-col gap-4 max-w-2xl">
        <TroubleshootEntry
          symptom={'"Sketch too big" / "text section exceeds available space"'}
          fix='Partition Scheme is wrong; must be "Huge APP (3MB No OTA/1MB SPIFFS)".'
        />
        <TroubleshootEntry
          symptom={'"library claims to run on esp32s3... may be incompatible" warning'}
          fix="Harmless, ignore."
        />
        <TroubleshootEntry
          symptom="Device stuck / won't reconnect after changing networks"
          fix="Use the resetwifi Serial command and re-enter credentials via the setup portal."
        />
      </div>
    </div>
  );
}

function TroubleshootEntry({ symptom, fix }: { symptom: string; fix: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col gap-2">
      <p className="text-white font-semibold text-sm leading-relaxed">{symptom}</p>
      <p className="text-white/50 text-sm leading-relaxed">→ {fix}</p>
    </div>
  );
}

/* ─── 10. Changelog ──────────────────────────────────────────────────────── */

function ChangelogSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading>Changelog</SectionHeading>
      <p className="text-white/40 text-sm max-w-2xl -mt-2 mb-1">
        Future updates are logged here rather than as separate version pages — we'll only fork
        into a fully versioned page if a future breaking change requires some users to
        intentionally stay on an old version.
      </p>
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold">
              v1.0.0
            </span>
            <span className="text-white/30 text-xs">Initial release</span>
          </div>
          <ul className="text-white/50 text-sm leading-relaxed list-disc list-inside mt-1">
            <li>ESP32-S3 voice pipeline: mic capture, wake-word detection, Opus encode/decode, speaker playback.</li>
            <li>WebSocket connection to the MByte cloud AI service.</li>
            <li>First-boot WiFi + Device ID provisioning via setup hotspot.</li>
            <li>Serial <code className="text-violet-300 font-mono text-xs">resetwifi</code> command for re-provisioning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
