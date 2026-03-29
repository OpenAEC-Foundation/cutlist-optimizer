# CutList Optimizer - Development Workflow

## 🚀 Lokaal Testen

**Terminal 1 - Frontend:**
```cmd
cd /d X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer
npm run dev
```

**Terminal 2 - Backend:**
```cmd
cd /d X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer\backend
python main.py
```

Open: http://localhost:5173

---

## 📤 Push naar GitHub (jouw fork)

```cmd
cd /d X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer
git add .
git commit -m "Beschrijving van wijziging"
git push origin main
```

---

## 🌐 Deploy naar Hetzner

```cmd
X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer\deploy\deploy-to-hetzner.bat
```

App live op: http://46.224.215.142

---

## 🔀 Pull Request naar OpenAEC-Foundation

1. Ga naar: https://github.com/jochem25/cutlist-optimizer
2. Klik **Contribute** → **Open Pull Request**
3. Review en **Merge** (bypass als admin indien nodig)

---

## 🔄 Updates van OpenAEC binnenhalen

```cmd
cd /d X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer
git fetch upstream
git merge upstream/main
git push origin main
```

---

## 🛠️ Handige Commands

**Git status:**
```cmd
cd /d X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer
git status
```

**Laatste commits bekijken:**
```cmd
git log --oneline -5
```

**Wijzigingen ongedaan maken:**
```cmd
git checkout -- .
```

**SSH naar Hetzner:**
```cmd
ssh root@46.224.215.142
```

**Docker logs op server:**
```bash
docker compose logs -f
```

---

## 📁 Belangrijke Paden

| Wat | Pad |
|-----|-----|
| Project | `X:\10_3BM_bouwkunde\50_Claude-Code-Projects\CutListOptimizer` |
| Frontend | `src/` |
| Backend | `backend/` |
| Deploy script | `deploy/deploy-to-hetzner.bat` |

## 🔗 Links

| Wat | URL |
|-----|-----|
| Jouw fork | https://github.com/jochem25/cutlist-optimizer |
| OpenAEC main | https://github.com/OpenAEC-Foundation/cutlist-optimizer |
| Live app | http://46.224.215.142 |
