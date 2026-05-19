export default function Terminal() {
  return (
    <div className="overflow-hidden rounded-3xl border border-dp-border-primary bg-dp-bg-2">
      <div className="flex items-center gap-1.5 border-b border-dp-border-primary bg-dp-bg-3 px-3.5 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-dp-rose" />
        <div className="h-2.5 w-2.5 rounded-full bg-dp-amber" />
        <div className="h-2.5 w-2.5 rounded-full bg-dp-teal" />
        <span className="ml-2 font-mono text-xs text-dp-text-dark">devpilot — profile.json</span>
      </div>
      <div className="p-[18px] font-mono text-xs leading-8">
        <div className="flex gap-2">
          <span className="text-dp-orange">~$</span>
          <span className="text-dp-text-secondary">cat developer.json</span>
        </div>

        <div className="text-dp-lime">{`{`}</div>

        <div className="pl-8 text-dp-lime">
          <span className="text-dp-amber">&quot;name&quot;</span>
          <span className="text-dp-lime">:</span>
          <span className="text-dp-rose"> &quot;Sahil&quot;</span>,
        </div>

        <div className="pl-8 text-dp-lime">
          <span className="text-dp-amber">&quot;role&quot;</span>
          <span className="text-dp-lime">:</span>
          <span className="text-dp-rose"> &quot;Full-Stack Developer&quot;</span>,
        </div>

        <div className="pl-8 text-dp-lime">
          <span className="text-dp-amber">&quot;stack&quot;</span>
          <span className="text-dp-lime">:</span>
          <span className="text-dp-rose"> [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;]</span>,
        </div>

        <div className="pl-8 text-dp-lime">
          <span className="text-dp-amber">&quot;education&quot;</span>
          <span className="text-dp-lime">:</span>
          <span className="text-dp-rose"> &quot;MCA @ DDU Nadiad&quot;</span>,
        </div>

        <div className="pl-8 text-dp-lime">
          <span className="text-dp-amber">&quot;status&quot;</span>
          <span className="text-dp-lime">:</span>
          <span className="text-dp-teal"> &quot;Open to Work ✓&quot;</span>
        </div>

        <div className="text-dp-lime">{`}`}</div>

        <div className="mt-2 flex gap-2">
          <span className="text-dp-orange">~$</span>
          <span className="inline-block h-3 w-0.5 animate-pulse bg-dp-orange" />
        </div>
      </div>
    </div>
  );
}