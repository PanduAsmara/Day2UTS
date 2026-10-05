Add-Type -AssemblyName System.IO.Compression.FileSystem

function Extract-Pptx($file, $outName) {
    Write-Host "Extracting $file to $outName..."
    $zip = [System.IO.Compression.ZipFile]::OpenRead($file)
    $sb = New-Object System.Text.StringBuilder
    $slides = $zip.Entries | Where-Object { $_.FullName -like "ppt/slides/slide*.xml" } | Sort-Object { 
        [int]($_.Name -replace '\D','') 
    }
    
    foreach ($slide in $slides) {
        $stream = $slide.Open()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $xml = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        
        $matches = [regex]::Matches($xml, '<a:t[^>]*>(.*?)</a:t>')
        $texts = @()
        foreach ($m in $matches) {
            $texts += $m.Groups[1].Value
        }
        if ($texts.Count -gt 0) {
            [void]$sb.AppendLine("=== " + $slide.Name + " ===")
            [void]$sb.AppendLine(($texts -join " "))
            [void]$sb.AppendLine("")
        }
    }
    $zip.Dispose()
    [System.IO.File]::WriteAllText($outName, $sb.ToString(), [System.Text.Encoding]::UTF8)
    Write-Host "Saved $outName"
}

# Bahasa Indonesia PPTs
Extract-Pptx "C:\Users\Pandu\Downloads\B.Indo\B.Indo Kelompok 1.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\bindo_kelompok1.txt"
Extract-Pptx "C:\Users\Pandu\Downloads\B.Indo\Kelompok 2 PPT Ejaan dan Tanda Baca.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\bindo_kelompok2.txt"
Extract-Pptx "C:\Users\Pandu\Downloads\B.Indo\Kelompok 3 - Diksi dan Kalimat efektif.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\bindo_kelompok3.txt"

# Agama Islam PPTs
Extract-Pptx "C:\Users\Pandu\Downloads\Agama Islam\Hakikat Eksistensi Manusia dan Tanggung Jawabnya(2) [Autosaved].pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\agama_hakikat_manusia.txt"
Extract-Pptx "C:\Users\Pandu\Downloads\Agama Islam\ipteks terbaru.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\agama_ipteks.txt"
Extract-Pptx "C:\Users\Pandu\Downloads\Agama Islam\Sistem hukum Islam,HAM dan Demokrasi dalam Islam.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\agama_hukum_ham_demokrasi.txt"
Extract-Pptx "C:\Users\Pandu\Downloads\Agama Islam\Sumber ajaran islam PAI.pptx" "C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform\agama_sumber_ajaran.txt"

Write-Host "ALL PPTX EXTRACTION COMPLETED!"
