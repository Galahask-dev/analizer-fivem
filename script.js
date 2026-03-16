document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Show the corresponding tab content
      const tabId = this.getAttribute('data-tab');
      const activeContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
  
  // GitHub button functionality
  const githubBtn = document.getElementById('githubBtn');
  
  // Simulate checking GitHub configuration status
  // In a real app, this would check localStorage or make an API call
  const isGitHubConfigured = localStorage.getItem('githubConfigured') === 'true';
  
  if (isGitHubConfigured) {
    githubBtn.classList.add('configured');
    githubBtn.classList.remove('not-configured');
    githubBtn.innerHTML = '<svg class="github-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>GitHub ✓';
    githubBtn.title = 'GitHub sincronizado';
  } else {
    githubBtn.classList.add('not-configured');
    githubBtn.classList.remove('configured');
    githubBtn.innerHTML = '<svg class="github-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>GitHub sync';
    githubBtn.title = 'Configurar GitHub sync';
  }
  
  githubBtn.addEventListener('click', function() {
    // Toggle GitHub configuration (for demo purposes)
    const isCurrentlyConfigured = this.classList.contains('configured');
    
    if (isCurrentlyConfigured) {
      // Simulate logging out/resetting
      localStorage.removeItem('githubConfigured');
      this.classList.remove('configured');
      this.classList.add('not-configured');
      this.innerHTML = '<svg class="github-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>GitHub sync';
      this.title = 'Configurar GitHub sync';
    } else {
      // Simulate configuring GitHub
      localStorage.setItem('githubConfigured', 'true');
      this.classList.add('configured');
      this.classList.remove('not-configured');
      this.innerHTML = '<svg class="github-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>GitHub ✓';
      this.title = 'GitHub sincronizado';
    }
  });
  
  // File dropzone functionality
  const dropzone = document.querySelector('.file-dropzone');
  const dropzoneText = dropzone.querySelector('p');
  const dropzoneBtn = dropzone.querySelector('.btn-primary');
  
  // Handle drag and drop events
  dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('dragover');
    dropzoneText.textContent = 'Suelta el archivo para analizarlo';
  });
  
  dropzone.addEventListener('dragleave', function() {
    this.classList.remove('dragover');
    dropzoneText.textContent = 'Arrastra y suelta archivos de profiler aquí o haz clic para seleccionar';
  });
  
  dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('dragover');
    dropzoneText.textContent = 'Arrastra y suelta archivos de profiler aquí o haz clic para seleccionar';
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFile(files[0]);
    }
  });
  
  // Handle click to select file
  dropzoneBtn.addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';
    
    fileInput.onchange = function(e) {
      if (e.target.files.length) {
        handleFile(e.target.files[0]);
      }
    };
    
    fileInput.click();
  });
  
  // Crash analyzer dropzone functionality
  const crashDropzone = document.querySelector('.tab-content[data-tab="crash"] .file-dropzone');
  if (crashDropzone) {
    const crashDropzoneText = crashDropzone.querySelector('p');
    const crashDropzoneBtn = crashDropzone.querySelector('.btn-primary');
    
    // Handle drag and drop events
    crashDropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('dragover');
      crashDropzoneText.textContent = 'Suelta el archivo para analizarlo';
    });
    
    crashDropzone.addEventListener('dragleave', function() {
      this.classList.remove('dragover');
      crashDropzoneText.textContent = 'Arrastra y suelta archivos de crash (ZIP, RAR, logs) aquí o haz clic para seleccionar';
    });
    
    crashDropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('dragover');
      crashDropzoneText.textContent = 'Arrastra y suelta archivos de crash (ZIP, RAR, logs) aquí o haz clic para seleccionar';
      
      const files = e.dataTransfer.files;
      if (files.length) {
        handleCrashFile(files[0]);
      }
    });
    
    // Handle click to select file
    crashDropzoneBtn.addEventListener('click', function() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.zip,.rar,.txt,.log';
      
      fileInput.onchange = function(e) {
        if (e.target.files.length) {
          handleCrashFile(e.target.files[0]);
        }
      };
      
      fileInput.click();
    });
  }
  
  // Function to handle file processing
  function handleFile(file) {
    // Show loading state
    dropzoneText.textContent = 'Analizando archivo...';
    dropzoneBtn.disabled = true;
    
    // Validate file extension
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.txt')) {
      dropzoneText.textContent = 'Formato de archivo no soportado. Suba un archivo .txt de profiler.';
      dropzoneBtn.disabled = false;
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
      try {
        const content = e.target.result;
        const profilerData = parseProfilerReport(content);
        
        // Update UI with results
        updateProfilerTab(profilerData);
        updateTopScriptsTab(profilerData);
        updateTopCrashesTab(profilerData);
        updateInfoTab(profilerData);
        
        // Switch to profiler tab to show results
        switchToTab('profiler');
        
        dropzoneText.textContent = 'Análisis completado. Arrastra otro archivo o haz clic para seleccionar';
        dropzoneBtn.disabled = false;
      } catch (error) {
        console.error('Error parsing file:', error);
        dropzoneText.textContent = 'Error al analizar el archivo. Asegúrate de que sea un reporte de profiler válido.';
        dropzoneBtn.disabled = false;
      }
    };
    
    reader.onerror = function() {
      dropzoneText.textContent = 'Error al leer el archivo';
      dropzoneBtn.disabled = false;
    };
    
    reader.readAsText(file);
  }
  
  // Function to handle crash file processing
  function handleCrashFile(file) {
    const crashDropzone = document.querySelector('.tab-content[data-tab="crash"] .file-dropzone');
    const crashDropzoneText = crashDropzone.querySelector('p');
    const crashDropzoneBtn = crashDropzone.querySelector('.btn-primary');
    
    // Show loading state
    crashDropzoneText.textContent = 'Analizando archivo de crash...';
    crashDropzoneBtn.disabled = true;
    
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith('.zip')) {
      // Use JSZip to extract
      const reader = new FileReader();
      reader.onload = function(e) {
        JSZip.loadAsync(e.target.result).then(function(zip) {
          // Collect all text files
          const textFiles = [];
          zip.forEach(function(relativePath, zipEntry) {
            if (!zipEntry.dir && (relativePath.endsWith('.txt') || relativePath.endsWith('.log'))) {
              textFiles.push(zipEntry);
            }
          });
          
          if (textFiles.length === 0) {
            crashDropzoneText.textContent = 'No se encontraron archivos de texto (.txt, .log) dentro del ZIP.';
            crashDropzoneBtn.disabled = false;
            return;
          }
          
          // Read each text file
          const promises = textFiles.map(entry => entry.async('string'));
          Promise.all(promises).then(function(contents) {
            const fullContent = contents.join('\n\n--- FILE SEPARATOR ---\n\n');
            analyzeCrashLogs(fullContent);
          }).catch(function(err) {
            console.error('Error reading text files:', err);
            crashDropzoneText.textContent = 'Error al leer archivos dentro del ZIP.';
            crashDropzoneBtn.disabled = false;
          });
        }).catch(function(err) {
          console.error('Error loading ZIP:', err);
          crashDropzoneText.textContent = 'Error al procesar el archivo ZIP. Asegúrate de que sea un archivo válido.';
          crashDropzoneBtn.disabled = false;
        });
      };
      reader.onerror = function() {
        crashDropzoneText.textContent = 'Error al leer el archivo ZIP.';
        crashDropzoneBtn.disabled = false;
      };
      reader.readAsArrayBuffer(file);
    } else if (fileName.endsWith('.rar')) {
      crashDropzoneText.textContent = 'Archivos RAR no son soportados actualmente. Por favor, extraiga los archivos y suba los logs individuales.';
      crashDropzoneBtn.disabled = false;
    } else if (fileName.endsWith('.txt') || fileName.endsWith('.log')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        analyzeCrashLogs(e.target.result);
      };
      reader.onerror = function() {
        crashDropzoneText.textContent = 'Error al leer el archivo.';
        crashDropzoneBtn.disabled = false;
      };
      reader.readAsText(file);
    } else {
      crashDropzoneText.textContent = 'Formato de archivo no soportado. Suba un archivo ZIP, TXT o LOG.';
      crashDropzoneBtn.disabled = false;
    }
  }
  
  // Function to analyze crash logs and update UI
  function analyzeCrashLogs(content) {
    const crashDropzone = document.querySelector('.tab-content[data-tab="crash"] .file-dropzone');
    const crashDropzoneText = crashDropzone.querySelector('p');
    const crashDropzoneBtn = crashDropzone.querySelector('.btn-primary');
    
    try {
      // For now, just display the raw content
      // Later we can parse crash logs and show detailed panel
      const crashData = parseCrashLogs(content);
      updateCrashTab(crashData);
      switchToTab('crash');
      crashDropzoneText.textContent = 'Análisis completado. Arrastra otro archivo o haz clic para seleccionar';
      crashDropzoneBtn.disabled = false;
    } catch (error) {
      console.error('Error parsing crash logs:', error);
      crashDropzoneText.textContent = 'Error al analizar los logs de crash. Asegúrate de que sean válidos.';
      crashDropzoneBtn.disabled = false;
    }
  }
  
  // Placeholder crash log parser - currently just extracts basic info
  function parseCrashLogs(content) {
    // Simple extraction: find timestamps, error messages, stack traces
    const lines = content.split('\n');
    const crashes = [];
    let currentCrash = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // Example detection: lines starting with "ERROR" or "Exception"
      if (line.match(/^ERROR:/i) || line.includes('Exception')) {
        if (currentCrash) crashes.push(currentCrash);
        currentCrash = { title: line, details: [] };
      } else if (currentCrash) {
        currentCrash.details.push(line);
      }
    }
    if (currentCrash) crashes.push(currentCrash);
    
    // If no crashes found, treat entire content as a single crash log
    if (crashes.length === 0) {
      crashes.push({ title: 'Crash Log', details: lines });
    }
    
    return { crashes: crashes, rawContent: content };
  }
  
  // Function to update the crash tab with analyzed data
  function updateCrashTab(data) {
    const crashContent = document.querySelector('.tab-content[data-tab="crash"]');
    crashContent.innerHTML = `
      <h1>Crash Analyzer</h1>
      <div class="file-dropzone">
        <p>Arrastra y suelta archivos de crash (ZIP, RAR, logs) aquí o haz clic para seleccionar</p>
        <button class="btn-primary">Seleccionar archivo</button>
      </div>
    `;
    
    // Add crash summary
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'crash-summary';
    summaryDiv.innerHTML = `
      <h2>Resumen de Crashes</h2>
      <p>Se detectaron ${data.crashes.length} eventos de crash.</p>
    `;
    
    // Add crash details
    data.crashes.forEach((crash, index) => {
      const crashDiv = document.createElement('div');
      crashDiv.className = 'crash-item';
      crashDiv.innerHTML = `
        <h3>Crash #${index + 1}: ${crash.title}</h3>
        <pre>${crash.details.join('\n')}</pre>
      `;
      summaryDiv.appendChild(crashDiv);
    });
    
    // Insert after the dropzone
    const dropzone = crashContent.querySelector('.file-dropzone');
    crashContent.insertBefore(summaryDiv, dropzone.nextSibling);
    
    // Restore dropzone functionality
    restoreCrashDropzoneFunctionality(crashContent);
  }
  
  // Function to restore crash dropzone functionality after updating content
  function restoreCrashDropzoneFunctionality(container) {
    const dropzone = container.querySelector('.file-dropzone');
    const dropzoneText = dropzone.querySelector('p');
    const dropzoneBtn = dropzone.querySelector('.btn-primary');
    
    // Handle drag and drop events
    dropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('dragover');
      dropzoneText.textContent = 'Suelta el archivo para analizarlo';
    });
    
    dropzone.addEventListener('dragleave', function() {
      this.classList.remove('dragover');
      dropzoneText.textContent = 'Arrastra y suelta archivos de crash (ZIP, RAR, logs) aquí o haz clic para seleccionar';
    });
    
    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('dragover');
      dropzoneText.textContent = 'Arrastra y suelta archivos de crash (ZIP, RAR, logs) aquí o haz clic para seleccionar';
      
      const files = e.dataTransfer.files;
      if (files.length) {
        handleCrashFile(files[0]);
      }
    });
    
    // Handle click to select file
    dropzoneBtn.addEventListener('click', function() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.zip,.rar,.txt,.log';
      
      fileInput.onchange = function(e) {
        if (e.target.files.length) {
          handleCrashFile(e.target.files[0]);
        }
      };
      
      fileInput.click();
    });
  }
  
  // Function to parse the profiler report
  function parseProfilerReport(content) {
    const lines = content.split('\n');
    const data = {
      summary: {},
      topCpu: [],
      topSpikes: [],
      topHitches: [],
      heavyTicks: [],
      fullTable: []
    };
    
    let currentSection = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Detect sections
      if (line.includes('RESUMEN GENERAL')) {
        currentSection = 'summary';
        continue;
      } else if (line.includes('TOP 20 — ACAPARADORES DE CPU')) {
        currentSection = 'topCpu';
        continue;
      } else if (line.includes('TOP 20 — PICOS (SPIKES)')) {
        currentSection = 'topSpikes';
        continue;
      } else if (line.includes('TOP 20 — CAUSANTES DE HITCHES')) {
        currentSection = 'topHitches';
        continue;
      } else if (line.includes('DETALLE DE TICKS PESADOS')) {
        currentSection = 'heavyTicks';
        continue;
      } else if (line.includes('TOP 50 SCRIPTS — TABLA COMPLETA')) {
        currentSection = 'fullTable';
        continue;
      } else if (line.startsWith('═══') || line === '') {
        // Skip separators and empty lines
        continue;
      }
      
      // Parse content based on section
      if (currentSection === 'summary') {
        parseSummaryLine(line, data.summary);
      } else if (currentSection === 'topCpu' && line.match(/^\d+\s+/)) {
        data.topCpu.push(parseTopCpuLine(line));
      } else if (currentSection === 'topSpikes' && line.match(/^\d+\s+/)) {
        data.topSpikes.push(parseTopSpikesLine(line));
      } else if (currentSection === 'topHitches' && line.match(/^\d+\s+/)) {
        data.topHitches.push(parseTopHitchesLine(line));
      } else if (currentSection === 'heavyTicks' && line.startsWith('Tick #')) {
        data.heavyTicks.push(parseHeavyTickLine(line, lines, i));
        // Skip the detail lines for this tick
        while (i < lines.length && !lines[i].trim().startsWith('═══') && !lines[i].trim().startsWith('Tick #') && lines[i].trim() !== '') {
          i++;
        }
        i--; // Adjust for loop increment
      } else if (currentSection === 'fullTable' && line.match(/^\d+\s+/)) {
        data.fullTable.push(parseFullTableLine(line));
      }
    }
    
    return data;
  }
  
  function parseSummaryLine(line, summary) {
    if (line.includes('Archivo:')) {
      summary.file = line.split(':')[1].trim();
    } else if (line.includes('Total de ticks:')) {
      summary.totalTicks = parseInt(line.split(':')[1].trim().split(' ')[0]);
    } else if (line.includes('Scripts únicos:')) {
      summary.uniqueScripts = parseInt(line.split(':')[1].trim().split(' ')[0]);
    } else if (line.includes('Tiempo promedio:')) {
      summary.avgTime = parseFloat(line.split(':')[1].trim().split(' ')[0]);
    } else if (line.includes('Peor tick:')) {
      summary.worstTick = parseFloat(line.split(':')[1].trim().split(' ')[0]);
    } else if (line.includes('Ticks pesados:')) {
      const parts = line.split(':')[1].trim().split(' ');
      summary.heavyTicksCount = parseInt(parts[0]);
      summary.heavyTicksPercent = parseFloat(parts[2].replace('(', '').replace('%)', ''));
    } else if (line.includes('Calificación:')) {
      summary.rating = line.split(':')[1].trim();
    }
  }
  
  function parseTopCpuLine(line) {
    const parts = line.split(/\s+/).filter(part => part !== '');
    return {
      rank: parseInt(parts[0]),
      script: parts.slice(1, -1).join(' '),
      cpuTotal: parseFloat(parts[parts.length - 1].replace('ms', ''))
    };
  }
  
  function parseTopSpikesLine(line) {
    const parts = line.split(/\s+/).filter(part => part !== '');
    return {
      rank: parseInt(parts[0]),
      script: parts.slice(1, -1).join(' '),
      worstTick: parseFloat(parts[parts.length - 1].replace('ms', ''))
    };
  }
  
  function parseTopHitchesLine(line) {
    const parts = line.split(/\s+/).filter(part => part !== '');
    return {
      rank: parseInt(parts[0]),
      script: parts.slice(1, -1).join(' '),
      appearances: parseInt(parts[parts.length - 1].replace('x', ''))
    };
  }
  
  function parseHeavyTickLine(line, allLines, index) {
    const tickMatch = line.match(/Tick #(\d+) — ([\d.]+)ms/);
    if (!tickMatch) return null;
    
    return {
      tickNumber: parseInt(tickMatch[1]),
      time: parseFloat(tickMatch[2]),
      details: [] // We'll skip detailed parsing for simplicity
    };
  }
  
  function parseFullTableLine(line) {
    const parts = line.split(/\s+/).filter(part => part !== '');
    return {
      rank: parseInt(parts[0]),
      script: parts.slice(1, -4).join(' '),
      cpuTotal: parseFloat(parts[parts.length - 4].replace('ms', '')),
      avgPerTick: parseFloat(parts[parts.length - 3].replace('ms', '')),
      worstTick: parseFloat(parts[parts.length - 2].replace('ms', '')),
      heavyTicks: parseInt(parts[parts.length - 1].replace('x', ''))
    };
  }
  
  // Function to update the profiler tab with summary data
  function updateProfilerTab(data) {
    const profilerContent = document.querySelector('.tab-content[data-tab="profiler"]');
    
    // Clear existing content except the heading and dropzone
    profilerContent.innerHTML = `
      <h1>Profiler Analyzer</h1>
      <div class="file-dropzone">
        <p>Arrastra y suelta archivos de profiler aquí o haz clic para seleccionar</p>
        <button class="btn-primary">Seleccionar archivo</button>
      </div>
    `;
    
    // Add summary information
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'profiler-summary';
    summaryDiv.innerHTML = `
      <h2>Resumen del Análisis</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>Archivo</h3>
          <p>${data.summary.file || 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Total de Ticks</h3>
          <p>${data.summary.totalTicks || 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Scripts Únicos</h3>
          <p>${data.summary.uniqueScripts || 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Tiempo Promedio</h3>
          <p>${data.summary.avgTime ? data.summary.avgTime.toFixed(2) + ' ms' : 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Peor Tick</h3>
          <p>${data.summary.worstTick ? data.summary.worstTick.toFixed(2) + ' ms' : 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Ticks Pesados</h3>
          <p>${data.summary.heavyTicksCount ? data.summary.heavyTicksCount + ' (' + data.summary.heavyTicksPercent.toFixed(1) + '%)' : 'N/A'}</p>
        </div>
        <div class="summary-item">
          <h3>Calificación</h3>
          <p>${data.summary.rating || 'N/A'}</p>
        </div>
      </div>
    `;
    
    // Insert after the dropzone
    const dropzone = profilerContent.querySelector('.file-dropzone');
    profilerContent.insertBefore(summaryDiv, dropzone.nextSibling);
    
    // Restore dropzone functionality
    restoreDropzoneFunctionality(profilerContent);
  }
  
  // Function to update the top scripts tab
  function updateTopScriptsTab(data) {
    const scriptsContent = document.querySelector('.tab-content[data-tab="top-scripts"]');
    scriptsContent.innerHTML = `
      <h1>Top Script Offenders</h1>
      <p>Scripts con mayor tiempo total de CPU en toda la grabación.</p>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Script</th>
              <th>CPU Total (ms)</th>
            </tr>
          </thead>
          <tbody>
            ${data.topCpu.map(item => `
              <tr>
                <td>${item.rank}</td>
                <td>${item.script}</td>
                <td>${item.cpuTotal.toFixed(1)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  // Function to update the top crashes tab
  function updateTopCrashesTab(data) {
    const crashesContent = document.querySelector('.tab-content[data-tab="top-crashes"]');
    crashesContent.innerHTML = `
      <h1>Top Crash Offenders</h1>
      <p>Scripts con el peor tick individual (picos que los jugadores sienten).</p>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Script</th>
              <th>Peor Tick (ms)</th>
            </tr>
          </thead>
          <tbody>
            ${data.topSpikes.map(item => `
              <tr>
                <td>${item.rank}</td>
                <td>${item.script}</td>
                <td>${item.worstTick.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  // Function to update the info tab
  function updateInfoTab(data) {
    const infoContent = document.querySelector('.tab-content[data-tab="info"]');
    infoContent.innerHTML = `
      <h1>Información</h1>
      <p>Esta aplicación analiza archivos de profiler de FiveM para identificar cuellos de botella de rendimiento y problemas de scripts.</p>
      <p><strong>Archivo analizado:</strong> ${data.summary.file || 'N/A'}</p>
      <p><strong>Fecha de análisis:</strong> ${new Date().toLocaleString()}</p>
      <h2>Recomendaciones</h2>
      <ul>
        ${data.summary.rating === 'Poor (Malo)' ? '<li><strong>Prioridad Alta:</strong> El rendimiento es pobre. Enfóquese en optimizar los scripts que aparecen en las listas de "Top Script Offenders" y "Top Crash Offenders".</li>' : ''}
        ${data.summary.heavyTicksPercent > 10 ? '<li><strong>Atención:</strong> Más del 10% de los ticks son pesados (>25ms). Esto puede causar hitches notables para los jugadores.</li>' : ''}
        <li>Revise los scripts que aparecen frecuentemente en las listas para identificar oportunidades de optimización.</li>
        <li>Considere usar herramientas de profiling continuo para monitorear el rendimiento en tiempo real.</li>
      </ul>
    `;
  }
  
  // Function to switch to a specific tab
  function switchToTab(tabId) {
    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to the selected tab
    const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
    }
    
    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show the selected tab content
    const activeContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  }
  
  // Function to restore dropzone functionality after updating content
  function restoreDropzoneFunctionality(container) {
    const dropzone = container.querySelector('.file-dropzone');
    const dropzoneText = dropzone.querySelector('p');
    const dropzoneBtn = dropzone.querySelector('.btn-primary');
    
    // Handle drag and drop events
    dropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('dragover');
      dropzoneText.textContent = 'Suelta el archivo para analizarlo';
    });
    
    dropzone.addEventListener('dragleave', function() {
      this.classList.remove('dragover');
      dropzoneText.textContent = 'Arrastra y suelta archivos de profiler aquí o haz clic para seleccionar';
    });
    
    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('dragover');
      dropzoneText.textContent = 'Arrastra y suelta archivos de profiler aquí o haz clic para seleccionar';
      
      const files = e.dataTransfer.files;
      if (files.length) {
        handleFile(files[0]);
      }
    });
    
    // Handle click to select file
    dropzoneBtn.addEventListener('click', function() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.txt';
      
      fileInput.onchange = function(e) {
        if (e.target.files.length) {
          handleFile(e.target.files[0]);
        }
      };
      
      fileInput.click();
    });
  }
});